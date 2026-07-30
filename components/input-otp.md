# InputOtp 验证码输入框

将用户输入的验证码以分格高亮的形式展示，常用于短信验证码、支付密码等场景。底层使用一个透明的原生 input 捕获键盘输入。

## 基础用法

<InputOtpDemo />

<details>
<summary>查看代码</summary>

<<< @/components/input-otp-demo.vue

</details>

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` (`v-model`) | 绑定值 | `string` | `""` |
| `length` | 验证码长度 | `number` | `6` |
| `type` | 输入类型，`number` 仅允许数字，`text` 允许字母数字 | `"number" \| "text"` | `"number"` |
| `itemClass` | 每个格子的自定义类名 | `string` | `""` |
| `activeItemClass` | 当前激活格子的类名 | `string` | `"focus-active"` |
| `hasFilledItemClass` | 已填充格子的类名 | `string` | `"active"` |
| `gap` | 格子间距 | `string` | `"10px"` |
| `autoFocus` | 是否自动聚焦 | `boolean` | `false` |

## 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 输入变化 | `(value: string) => void` |
| `complete` | 输入达到 `length` 时触发 | `(value: string) => void` |
| `enter` | 回车且已填满时触发 | `() => void` |

## 说明

组件内部通过 `Backspace / Delete` 删除末尾字符，并屏蔽方向键等干扰按键，保证输入始终连续。
