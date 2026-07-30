# FrameSlide 相框滑块

通过指针拖拽在多个「帧」之间横向滑动切换的容器（泛型 `FrameSlide<T>`），底层使用 `transform: translate3d` 定位，拖动灵敏度可通过 `sensitivity` 调整。

## 基础用法

<FrameSlideDemo />

<details>
<summary>查看代码</summary>

<<< @/components/frame-slide-demo.vue

</details>

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` (`v-model`) | 当前帧索引 | `number` | `0` |
| `items` | 帧数据数组 | `T[]` | `[]` |
| `sensitivity` | 滑动灵敏度，值越大越灵敏（切换阈值 = 宽度 / 帧数 / sensitivity） | `number` | `10` |

## 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 帧索引变化 | `(index: number) => void` |

## 插槽

| 插槽名 | 子作用域 | 说明 |
| --- | --- | --- |
| `default` | `{ item, index }` | 每一帧的内容 |
