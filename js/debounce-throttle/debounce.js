function debounce(fn, wait, immediate) {
  let timer, res;

  function resFn(...args) {
    const self = this;
    // 清除计时器
    if (timer) {
      clearTimeout(timer);
    }

    if (immediate) {
      // 立刻执行
      if (!timer) {
        // 设立一个计时器，防止多次直接触发 fn
        // 若只触发一次当做普通方法触发
        // 返回结果
        timer = setTimeout(function() {
          timer = null;
        }, wait);

        res = fn.apply(self, args);
      } else {
        // 多次触发进入防抖
        timer = setTimeout(() => {
          fn.apply(self, args);
        }, wait);
      }
    } else {
      timer = setTimeout(() => {
        fn.apply(self, args);
      }, wait);
    }

    return res;
  }

  // 取消清除计时器
  resFn.cancel = function() {
    clearTimeout(timer);
    timer = null;
  };

  return resFn;
}
