## <Link>

#### to: string | object

```jsx
<Link
  to="about"
  to="/courses?sort=name"
  to={{
    pathname: "courses",
    search: "?sort=name",
    hash: "#the-hash",
    state: { fromDashboard: true }
  }}
  to={location => ({ ...location, pathname: "/courses" })}
  to={location => `${location.pathname}?sort=name`}
/>
```

#### replace: bool

当为 true 时, 导航的时候会代替 history stack 定的记录而不是添加一条新的记录

#### innerRef: func | RefObject

ref

#### other props
