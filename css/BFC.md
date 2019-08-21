BFC:
- Block Formatting Context 
- 内部 box 会在垂直方向一个接一个的放置
- box 垂直方向的距离由 margin 决定，在一个 BFC 中，两个相邻的块级盒子的垂直边距会产生重叠
- 在一个 BFC 中， 每个盒子的左边缘（margin-left）会触碰到容器的左边缘（border-left），从左到右的格式则相反
- 形成的 BFC 的区域不会和 float 盒子重叠
- 计算 BFC 区域高度时，浮动元素也参与计算

生成方式:
- `<html></html>`
- `float !== none`
- `position: absolute`
- `display: inline-block`
- `display: table-cell`
- `display: table-caption`
- `display: table | table-row | table-row-group | table-header-group | table-footer-group | inline-table`
- `overflow !== visible`
- `display: flow-row`
- `contain: layout | content | paint` 
  - contain 属性允许开发者声明当前元素和他的内容尽可能的独立于 DOM 树的其他部分。这使得浏览器再重新计算布局，样式，绘图和他们的组合时，只会影响到有限 DOM 区域，而不是整个页面。
  - none
  - strict 布局包含 layout、style、paint 和 size
  - content 布局包含 layout、style 和 paint
  - size 布局包含 size
  - layout 布局包含 layout
  - style 布局包含 style
  - paint 布局包含 paint
