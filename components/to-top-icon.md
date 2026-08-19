# ToTopIcon 回到顶部

固定在视口右下角（默认 `position: fixed`）的「回到顶部」悬浮按钮。监听滚动容器的 `scroll` 事件，当滚动距离超过 `boundaryStart` 时淡入显示，点击后平滑滚动回顶部；当接近底部（`boundaryEnd`）时按钮会自动上移避免遮挡。

## 基础用法

省略 `target` 时默认监听整页滚动（`document`）。向下滚动页面超过 `boundaryStart`（默认 `300px`）后按钮出现，点击平滑回到顶部。

<ToTopIconDemo />

<details>
<summary>查看代码</summary>

<<< @/components/to-top-icon-demo.vue

</details>

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `target` | 监听滚动的元素，可传 `ref`、getter `() => el` 或直接元素；为空时监听整页 `document` | `MaybeRefOrGetter<Element \| null \| undefined>` | `undefined`（整页） |
| `boundaryStart` | 滚动超过该像素值（px）后显示按钮 | `number` | `300` |
| `boundaryEnd` | 距底部小于该像素值（px）时，按钮 `bottom` 自动调整为该值 | `number` | `300` |
| `left` | 距左侧距离（px） | `number` | — |
| `right` | 距右侧距离（px） | `number` | `100` |
| `top` | 距顶部距离（px） | `number` | — |
| `bottom` | 距底部距离（px） | `number` | `100` |
| `bg` | 按钮背景色 | `string` | `"rgba(0,0,0,0.3)"` |
| `size` | 图标尺寸（数字，单位 px，作用于箭头 SVG 宽高） | `number` | `32` |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 自定义按钮内容；不提供时显示默认的上箭头 SVG |

## 说明

- 组件使用 `position: fixed` 定位在视口内，位置由 `left/right/top/bottom`（px）决定。
- 监听目标通过 `target` 传入：传某个滚动容器的 `ref`（或 getter）即可只在该容器内生效；不传则作用于整页。
- 点击按钮调用 `scrollTo({ top: 0, behavior: "smooth" })` 平滑回到顶部，逻辑在组件内部，无需额外处理。
