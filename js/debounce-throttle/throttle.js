/**
 *
 * @param {function} fn call fn
 * @param {number} wait wait time
 * @param {object} options
 * @param {boolean} options.leading: disabled first call fn
 * @param {boolean} options.trailing disabled end callback
 */
function throttle(fn, wait, options = {}) {
  let timer,
    self,
    args,
    prev = 0;

  // 最后一次调用的回调
  const later = () => {
    prev = options.leading === false ? 0 : Date.now();
    timer = null;
    fn.apply(self, args);

    if (!timer) {
      self = args = null;
    }
  };

  const resFn = function(...argv) {
    const now = Date.now();

    if (!prev && options.leading === false) {
      // 首次调用且首次立即调用
      prev = now;
    }
    const remaining = wait - (now - prev);
    self = this;
    args = argv;

    if (remaining <= 0 || remaining > wait) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }

      prev = now;
      fn.apply(self, args);

      if (!timer) {
        self = args = null;
      }
    } else if (!timer && options.trailing !== false) {
      timer = setTimeout(later, remaining);
    }
  };

  return resFn;
}
