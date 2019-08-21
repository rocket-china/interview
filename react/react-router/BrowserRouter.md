## <BrowserRouter>

一个 `<Router>` 使用 html5 history API（pushState, replaceState and the popstate event）使你的 UI 和 URL 同步。

```jsx
function getConfirmation(message, callback) {
  const allowTransition = window.confirm(message);

  callback(allowTransition);
}

<BrowserRouter
  basename="/calendar"
  forceRefresh
  getUserConfirmation={getConfirmation}
  keyLength
>
  <App />
</BrowserRouter>;
```

#### basename:string

所有地址的 baseUrl。如果你的 app 是 server 的子目录提供的，则需要将其设置为子目录。正确的格式名称之前需要一个前导斜杠，但没有尾部斜杠

#### getUserConfirmation: func

确认导航时使用的 function，默认使用 window.confirm

#### forceRefresh: bool

如果为 true 在页面导航时将使用全页面刷新，一般使用在浏览器不支持 html5 history API 的时候

#### keyLength: number

#### children: node

a single child element to render
