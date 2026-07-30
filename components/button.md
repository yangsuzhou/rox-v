# Button 按钮

最常用的按钮组件，触发一个即时操作。在原生 `<button>` 的基础上扩展了一组用于快速定制外观的样式属性。

## 基础用法

<ButtonDemo />

<details>
<summary>查看代码</summary>

<<< @/components/button-demo.vue

</details>

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `type` | 原生 button 的 type | `"button" \| "submit" \| "reset"` | `"button"` |
| `block` | 是否为块级（占满父容器宽度） | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `enableDisabledClick` | 禁用状态下是否仍触发 `@click` | `boolean` | `false` |
| `bg` | 背景色 | `string` | — |
| `border` | 边框样式 | `string` | — |
| `radius` | 圆角 | `string` | — |
| `padding` | 内边距 | `string` | — |
| `disabledBg` | 禁用时的背景色 | `string` | — |

## 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click` | 点击按钮时触发 | `(e: MouseEvent) => void` |

## 插槽

| 插槽名 | 说明 |
| --- | --- |
| `default` | 按钮内容 |

## 完整示例

```vue
<template>
    <Button bg="#646cff" border="none" radius="999px" @click="submit">提交</Button>
</template>

<script setup lang="ts">
import { Button } from "@a-drowned-fish/rox-v";
</script>
```
