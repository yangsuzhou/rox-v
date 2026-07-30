# FadeInOut 淡入淡出

轮播式淡入淡出组件（泛型 `FadeInOut<T>`），支持自动播放、底部进度圆点，并可通过 `progress` 事件监听当前帧进度。

## 基础用法

<FadeInOutDemo />

<details>
<summary>查看代码</summary>

<<< @/components/fade-in-out-demo.vue

</details>

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` (`v-model`) | 当前索引 | `number` | `0` |
| `items` | 轮播数据 | `T[]` | `[]` |
| `delay` | 每帧停留时长（ms） | `number` | `5000` |
| `duration` | 淡入淡出动画时长（ms） | `number` | `1600` |
| `autoplay` | 是否自动播放 | `boolean` | `true` |
| `dotVisible` | 是否显示圆点 | `boolean` | `true` |
| `dotVisibleWhenOnlyOne` | 仅一帧时是否仍显示圆点 | `boolean` | `false` |
| `dotClass` | 圆点容器类名 | `string` | `""` |
| `dotItemClass` | 单个圆点类名 | `string` | `""` |
| `dotGap` | 圆点间距（px） | `number` | `10` |
| `dotItemBg` | 未激活圆点颜色 | `string` | `"rgba(255,255,255,0.4)"` |
| `activeDotItemBg` | 激活圆点颜色 | `string` | `"#ffffff"` |

## 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 索引变化 | `(index: number) => void` |
| `progress` | 当前帧切换进度 | `(ratio: number) => void` |

## 插槽

| 插槽名 | 子作用域 | 说明 |
| --- | --- | --- |
| `default` | `{ item, index }` | 每一帧的内容 |
