# Panel 面板

横向（或纵向）切换的面板容器，通过 `v-model` 绑定当前索引，并以 `flex + transform` 实现平滑滑动切换。支持泛型 `Panel<T>`。

## 基础用法

<PanelDemo />

<details>
<summary>查看代码</summary>

<<< @/components/panel-demo.vue

</details>

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` (`v-model`) | 当前索引 | `number` | `0` |
| `items` | 面板数据，每项需含 `key`、`label` | `{ key; label; disabled?: boolean }[]` | `[]` |
| `dir` | 排列方向 | `"x" \| "y" \| "rtl"` | `"x"` |
| `duration` | 切换动画时长（ms） | `number` | `0` |

## 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 索引变化 | `(index: number) => void` |

## 插槽

| 插槽名 | 子作用域 | 说明 |
| --- | --- | --- |
| `default` | `{ item, index, active }` | 每个面板的内容 |
