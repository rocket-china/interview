## <Route>

去渲染 URL 对应的 UI

#### Route render methods

- `<Route component={React.Component} />`

  - 一个 React 组件，自动传入 Route props
  - 使用 `React.createElement` 去创建一个新的 React Element
  - 不要是用 function，可能导致每次都渲染
  - 优先级大

- `<Route render={(RouterProps)=> React.Component} />`

  - 可以根据需要组合自己的组件
  - 优先级大于 children

* `<Route children={({match, ...RouterProps}) => React.Component} />`

  - 当需要 match 参数来决定渲染的对象时，及不论是否匹配都会调用
  - use animation

#### Route props

- match

- location

- history

#### exact: bool

#### strict: bool

#### location: object

#### sensitive: bool

大小写敏感
