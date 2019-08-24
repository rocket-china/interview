async function fn(args) {
  // ...
}

// <===>
function fn(args) {
  return spawn(function*() {});
}

function spawn(genF) {
  return new Promise((resolve, reject) => {
    const gen = genF();

    function step(nextFn) {
      let next;

      try {
        next = nextFn(); // 执行 gen.next
      } catch (err) {
        return reject(err);
      }

      if (next.done) {
        return resolve(next.value); // 返回最终值
      }

      // 一直自执行至 done
      Promise.resolve(next.value).then(
        v => {
          step(() => gen.next(v));
        },
        e => {
          step(() => gen.throw(e));
        }
      );
    }

    step(() => gen.next(undefined));
  });
}
