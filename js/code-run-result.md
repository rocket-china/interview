```javascript
var b = 10;

(function b () {
  b = 20; 
  // 函数变量提升，寻找至具名函数 b， IIFE（Immediately-invoked function expression）不能赋值（内部机制）所以赋值失败
  // strict mode: Uncaught TypeError: Assignment to constant variable 
  console.log(b); // 10
})();
```

```javascript
var a = 10;

(function(){
  console.log(a); // undefined, IIFE 函数作用域内部提升
  a = 5; // 对 IIFE 函数作用域内的 a 赋值
  console.log(window.a); // 10
  var a = 20; 
  console.log(a); // 20
})()
```

```javascript
var obj = {
  '2': 3,
  '3': 4,
  'length': 2,
  'splice': Array.prototype.splice,
  'push': Array.prototype.push
}

// 以obj为对象执行 push 操作，由于 length === 2， 所以更新 2 位置 value
obj.push(1);
obj.push(2);

console.log(obj);
/*
  {
    '2': 1,
    '3': 2,
    'length': 4,
    'splice': Array.prototype.splice,
    'push': Array.prototype.push
  }
*/

```