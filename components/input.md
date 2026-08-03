# Input 输入框

通过键盘输入内容的基础表单组件，支持清除、密码显隐切换，并兼容原生输入事件。

## 基础用法

<InputDemo />

<details>
<summary>查看代码</summary>

<<< @/components/input-demo.vue

</details>

## Props

| 参数                     | 说明                       | 类型               | 默认值   |
| ------------------------ | -------------------------- | ------------------ | -------- |
| `modelValue` (`v-model`) | 绑定值                     | `string \| number` | `""`     |
| `type`                   | 输入框类型                 | `string`           | `"text"` |
| `placeholder`            | 占位文本                   | `string`           | `""`     |
| `disabled`               | 是否禁用                   | `boolean`          | `false`  |
| `clearable`              | 是否显示清除按钮           | `boolean`          | `false`  |
| `passwordToggle`         | 是否为密码框并支持显隐切换 | `boolean`          | `false`  |
| `name`                   | 原生 name                  | `string`           | —        |
| `id`                     | 原生 id                    | `string`           | —        |
| `autocomplete`           | 原生 autocomplete          | `string`           | —        |
| `minlength`              | 最小长度                   | `number`           | —        |
| `maxlength`              | 最大长度                   | `number`           | —        |

## 事件

| 事件名              | 说明             | 回调参数                  |
| ------------------- | ---------------- | ------------------------- |
| `update:modelValue` | 输入值变化时触发 | `(value: string) => void` |
| `input`             | 原生 input 事件  | `(e: Event) => void`      |
| `change`            | 原生 change 事件 | `(e: Event) => void`      |
| `focus`             | 获取焦点         | `(e: FocusEvent) => void` |
| `blur`              | 失去焦点         | `(e: FocusEvent) => void` |
| `clear`             | 点击清除按钮     | `() => void`              |
| `enter`             | 按下回车         | `() => void`              |

## 插槽

| 插槽名   | 说明           |
| -------- | -------------- |
| `prefix` | 输入框前缀内容 |
| `suffix` | 输入框后缀内容 |
