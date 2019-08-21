## <NavLink>

```jsx
<NavLink
  activeClassName="active"
  activeStyle={{ color: "red" }}
  exact
  strict
  isActive={(match: boolean, location) => {
    // return boolean
  }}
/>
```

<Link> 的一个特殊的版本，如果url匹配元素渲染时会有特殊的样式，

#### activeClassName: string

default: "active"

#### activeStyle: object

#### exact: bool

精确匹配

#### strict: bool

匹配时会考虑位置路径上的尾部斜杠

#### isActive: func
