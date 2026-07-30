# FadeInOutSlideDot 淡入淡出圆点

独立的一组「滑动进度圆点」指示器，可作为 `FadeInOut` 的自定义指示器，或单独用于标记当前步骤。`active` 为受控属性，点击圆点会触发 `change` 事件。

## 基础用法

<FadeInOutSlideDotDemo />

<details>
<summary>查看代码</summary>

<<< @/components/fade-in-out-slide-dot-demo.vue

</details>

## Props

| 参数                 | 说明                           | 类型                       | 默认值                    |
| -------------------- | ------------------------------ | -------------------------- | ------------------------- |
| `items`              | 圆点对应的数据源（仅用于数量） | `unknown[]`                | `[]`                      |
| `active`             | 当前激活索引（受控）           | `number`                   | `0`                       |
| `delay`              | 动画停留时长（ms）             | `number`                   | `5000`                    |
| `duration`           | 过渡时长（ms）                 | `number`                   | `1600`                    |
| `gap`                | 圆点间距（px）                 | `number`                   | `10`                      |
| `itemClass`          | 圆点项类名                     | `string`                   | `""`                      |
| `activeItemClass`    | 激活项类名                     | `string`                   | `""`                      |
| `visibleWhenOnlyOne` | 仅一项时是否显示               | `boolean`                  | `false`                   |
| `bg`                 | 未激活背景色                   | `string`                   | `"rgba(255,255,255,0.4)"` |
| `activeBg`           | 激活背景色                     | `string`                   | `"#ffffff"`               |
| `initialAnimate`     | 是否初始化时执行动画           | `boolean`                  | `true`                    |
| `dir`                | 布局方向                       | `"ltr" \| "rtl" \| "auto"` | `ltr`                     |

## 事件

| 事件名     | 说明     | 回调参数                  |
| ---------- | -------- | ------------------------- |
| `change`   | 点击圆点 | `(index: number) => void` |
| `progress` | 进度变化 | `(ratio: number) => void` |
