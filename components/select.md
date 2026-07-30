# Select 下拉选择

下拉选择器，支持选项禁用与多级嵌套（`children`）。选中值通过 `v-model` 以数组形式维护。

## 基础用法

<SelectDemo />

<details>
<summary>查看代码</summary>

<<< @/components/select-demo.vue

</details>

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` (`v-model`) | 选中值数组 | `(string \| number)[]` | `[]` |
| `items` | 选项数据，见下方结构 | `RoxVSelectOptionProps[]` | `[]` |
| `itemGap` | 选项间距 | `string` | — |
| `listContainerClassName` | 选项列表容器类名 | `string` | `""` |
| `scrollContainerClassName` | 滚动容器类名 | `string` | `""` |

### SelectOption 数据结构

```ts
interface RoxVSelectOptionProps {
    label: string;
    value: string | number;
    disabled?: boolean;
    children?: RoxVSelectOptionProps[];
}
```

## 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 选中变化 | `(value: (string \| number)[]) => void` |
| `open` | 展开下拉 | `() => void` |
| `close` | 收起下拉 | `() => void` |

## 插槽

| 插槽名 | 子作用域 | 说明 |
| --- | --- | --- |
| `default` | `{ selected, visible }` | 触发器显示内容 |
| `item` | `{ item, index, active }` | 自定义选项渲染 |
