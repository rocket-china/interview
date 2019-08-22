## <Router>

所有 route component 的最底层接口

- <BrowserRouter>

- <HashRouter>

- <MemoryRouter>

- <NativeRouter>

- <StaticRouter>
  - a `<Router>` never change location

#### history: object

```jsx
import { Router } from "react-router";
import { createBrowserHistory } from "history";

<Router history={history}>
  <App />
</Router>;
```
