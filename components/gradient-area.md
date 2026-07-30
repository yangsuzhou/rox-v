# GradientArea 渐变区域

监听指定滚动容器的滚动位置，将背景色按滚动距离计算透明度（从完全不透明渐变到透明），常用于导航栏 / 头部背景随滚动淡出的效果。

## 基础用法

<GradientAreaDemo />

<details>
<summary>查看代码</summary>

<<< @/components/gradient-area-demo.vue

</details>

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `bg` | 背景色（任意可被解析为 rgba 的颜色，如 `#646cff`） | `string` | `"#ffffff"` |
| `startBoundary` | 开始渐变的滚动距离（px，最小为 1） | `number` | `100` |
| `endBoundary` | 完全透明的滚动距离（px） | `number` | `500` |
| `selector` | 滚动容器选择器；不传则监听 `window` 滚动 | `string` | — |

## 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `alpha-change` | 透明度变化 | `(opacity: number) => void` |
| `reach-start` | 是否进入渐变区间 | `(reach: boolean) => void` |

## 插槽

| 插槽名 | 子作用域 | 说明 |
| --- | --- | --- |
| `default` | `{ opacity: number }` | 背景之上的内容 |
