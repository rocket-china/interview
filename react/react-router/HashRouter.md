## HashRouter

一个 `<Router>` 使用 hash 作为 URL 的一部分去保持 UI 和 URL 的同步

```jsx
<HashRouter basename getUserConfirmation hashType />
```

#### hashType: string

`window.location.hash` 的 encoding 类型

- "slash" #/ #/sunshine/lolipops default
- "noslash" # #sunshine/lolipops
- "hashband" #! #!/sunshine/lolipops
