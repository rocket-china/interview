function debounce (fn, wait, immediate) {
    let timer, self = this, res;
    
    function resFn(...args) {
        if (timer) {
            clearTimeout(timer)
        }

        if (immediate) {
            if (!timer) {
                timer = setTimeout(function () {
                    timer = null;
                }, wait)

                res = fn.apply(self, args);
            } else {
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

    resFn.cancel = function () {
        clearTimeout(timer);
        timer = null;
    }

    return resFn;
}