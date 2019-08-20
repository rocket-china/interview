## Object.prototype.toString.call() 和  instanceof 和 Array.isArray() 的区别和优劣

#### Object.prototype.toString.call()
继承 `Object` 的对象都有 `toString` 方法，改变 `toString()` 的上线文可以使其输出上下文的类型 `[object type]`

- `[object String]`
- `[object Number]`
- `[object Object]`
- `[object Array]`
- `[object Null]`
- `[object Function]`
- `[object Symbol]`
- `[object Undefined]`

常用于判断**内置对象**类型

#### instanceof
判断对象原型链中是否含有类型对应的 `prototype`
判断自定义对象类型

#### Array.isArray()
判断一个对象是为数组
es6 方法
可以判断 `iframes` 判断数组优于 instanceof 

```javascript
// es5

Array.prototype.isArray = function (obj) {
  return Object.prototype.toString.call(obj) === '[Object Array]';
}
```