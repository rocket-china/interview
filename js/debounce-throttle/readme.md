#### 防抖和节流

#### 防抖 debounce 
触发高频事件之后n秒后函数之后执行一次， 如果n秒内触发，则重新计时
- window resize, scroll
- mousedown, mousemove
- keyup, keydown

#### 节流 throttle
高频事件触发，但n秒内之后执行一次，会减少事件的触发频率