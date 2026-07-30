# Popup 弹窗

基于 `Teleport` 的通用弹层容器，支持上、下、左、右、居中五种位置与遮罩点击关闭。

## 基础用法

<PopupDemo />

<details>
<summary>查看代码</summary>

<<< @/components/popup-demo.vue

</details>

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` (`v-model`) | 是否显示 | `boolean` | `false` |
| `to` | Teleport 目标节点 | `string` | `"body"` |
| `bg` | 遮罩背景色 | `string` | `"rgba(0,0,0,.5)"` |
| `duration` | 过渡动画时长（ms） | `number` | `150` |
| `position` | 弹层位置 | `"top" \| "bottom" \| "left" \| "right" \| "center"` | `"bottom"` |
| `maskClosable` | 点击遮罩是否关闭 | `boolean` | `true` |
| `top` / `left` / `right` / `bottom` | 弹层偏移 | `string` | `"0px"` |
| `zIndex` | 层级 | `number \| string` | `999` |
| `containerClass` | 遮罩容器类名 | `string` | `""` |
| `contentClass` | 内容容器类名 | `string` | `""` |

## 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 显隐状态变化 | `(value: boolean) => void` |

## 插槽

| 插槽名 | 说明 |
| --- | --- |
| `default` | 弹层内容（点击内容不会关闭，需自行处理） |
