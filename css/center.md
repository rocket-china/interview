```html
<div class="parent">
  <div class="child"></div>
</div>
```

```sass
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}

.parent {
  display: flex;

  .child {
    margin: auto;
  }
}
```


```sass
.parent {
  position: relative;

  .child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .child {
    position: absolute;
    top: 0;
    right:0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
}
```


```sass
.parent {
  display: grid;
  
  .child {
    justify-self: center;
    align-self: center;
  }
}
```


```sass
.parent {
  font-size: 0;
  text-align: center;
  
  &:before {
    content: "";
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;

    .child {
      display: inline-block;
      vertical-align: middle;
    }
  }
}
```


```sass
.parent {
  display: table;

  .child {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
}
```