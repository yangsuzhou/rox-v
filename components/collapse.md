# Collapse 折叠面板

基于 `Transition` 的高度过渡折叠容器，通过 `open` 属性控制展开与收起。

## 基础用法

<CollapseDemo />

<details>
<summary>查看代码</summary>

<<< @/components/collapse-demo.vue

</details>

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `open` | 是否展开 | `boolean` | `false` |
| `maxHeight` | 展开时最大高度（用于过渡） | `number \| string` | `"100dvh"` |
| `duration` | 动画时长（ms） | `number` | `200` |

## 插槽

| 插槽名 | 说明 |
| --- | --- |
| `default` | 折叠区域内容 |
