const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function thenable(fn) {
  return fn !== null && typeof fn.then === "function";
}

function resolvePromise(p, v, resolve, reject) {
  // 判断 v 是不是一个 promise 如果是，获得一个 value/reason 给 resolve/reject
  if (p === v) {
    return reject(new TypeError("循环引用"));
  }

  let called = false;

  if (v instanceof Promise) {
    // Promise 实例
    if (v.status === PENDING) {
      v.then(function(y) {
        resolvePromise(p, y, resolve, reject);
      }, reject);
    } else {
      v.then(resolve, reject);
    }
  } else if (v !== null && (typeof v === "object" || typeof v === "function")) {
    // 其他库的 Promise
    try {
      let then = v.then;

      if (typeof then === "function") {
        then.call(
          v,
          function(y) {
            if (called) {
              return;
            }
            resolvePromise(p, y, resolve, reject);
          },
          function(e) {
            if (called) {
              return;
            }

            called = true;

            reject(e);
          }
        );
      } else {
        resolve(v);
      }
    } catch (e) {
      if (called) {
        return;
      }

      called = true;
      reject(e);
    }
  } else {
    resolve(v);
  }
}

function Promise(exec) {
  let self = this;

  self.status = PENDING;

  self.onResolvedCbs = [];
  self.onRejectedCbs = [];

  function resolve(v) {
    if (thenable(v)) {
      return v.then(v);
    }

    setTimeout(() => {
      if (self.status === PENDING) {
        self.status = FULFILLED;
        self.value = v;

        self.onResolvedCbs.forEach(cb1 => cb1(self.value));
      }
    });
  }

  function reject(r) {
    setTimeout(() => {
      if (self.status === PENDING) {
        this.status = REJECTED;
        self.value = r;
        self.onRejectedCbs.forEach(cb1 => cb1(self.value));
      }
    });
  }

  try {
    exec(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

Promise.prototype.then = function(onFulfilled, onRejected) {
  onFulfilled =
    typeof onFulfilled === "function"
      ? onFulfilled
      : function(v) {
          return v;
        };
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : r => {
          throw r;
        };
  const self = this;
  let promise2;

  if (self.status === FULFILLED) {
    return (promise2 = new Promise((resolve, reject) => {
      try {
        let v = onFulfilled(self.value);
        resolvePromise(promise2, v, resolve, reject);
      } catch (e) {
        reject(e);
      }
    }));
  }

  if (self.status === REJECTED) {
    return (promise2 = new Promise(function(resolve, reject) {
      try {
        resolvePromise(promise2, onRejected(self.value), resolve, reject);
      } catch (e) {
        reject(e);
      }
    }));
  }

  if (self.status === PENDING) {
    return (promise2 = new Promise(function(resolve, reject) {
      self.onResolvedCbs.push(function() {
        try {
          resolvePromise(promise2, onFulfilled(self.value), resolve, reject);
        } catch (e) {
          reject(e);
        }
      });

      self.onRejectedCbs.push(function() {
        try {
          resolvePromise(promise2, onRejected(self.value), resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    }));
  }
};

Promise.prototype.catch = function(onRejected) {
  this.then(null, onRejected);
};

Promise.deferred = Promise.defer = function() {
  const defer = {};

  defer.promise = new Promise((resolve, reject) => {
    defer.resolve = resolve;
    defer.reject = reject;
  });

  return defer;
};

function gen(times, cb) {
  const res = [];
  let count = 0;

  return function(i, data) {
    res[i] = data;

    if (++count === times) {
      cb(res);
    }
  };
}

Promise.all = function(ps) {
  return new Promise((resolve, reject) => {
    const done = gen(ps.length, resolve);

    for (const p of ps) {
      p.then(v => {
        done(v);
      });
    }
  });
};

Promise.race = function(ps) {
  return new Promise((resolve, reject) => {
    for (const p of ps) {
      p.then(resolve, reject);
    }
  });
};

Promise.resolve = function(v) {
  return new Promise(resolve => {
    resolve(v);
  });
};

Promise.reject = function(r) {
  return new Promise((resolve, reject) => {
    reject(r);
  });
};

const p = new Promise((resolve, reject) => {
  resolve(12);
});

p.then(v => {
  console.log(v);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(22);
    }, 2000);
  });
}).then(v => {
  console.log(v);
});
