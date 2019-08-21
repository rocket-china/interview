箭头函数是普通函数的简写
- this 指向定义函数时环境的 this
- 没有 arguments 
- 不可以使用 `yield`, 因此不能作为 Generator 函数
- 不可以 `new`
  - 没有自己的 `this`，因此无法 call，apply
  - 没有 `prototype`

```javascript
function newFn(proto, ...args){
  const res1 = {};
  res.__proto__ = proto.prototype;
  const res2 = proto.apply(res1, args);

  if (typeof res2 === 'object' || typeof res2 === 'function' &&  res2 !== null) {
    return res2;
  }  

  return res1;
}
```
