# CountDown 倒计时

基于 `fish-helper` 的剩余毫秒倒计时，通过 `v-model` 绑定剩余时间（毫秒），并以插槽暴露剩余秒数。

## 基础用法

<CountDownDemo />

<details>
<summary>查看代码</summary>

<<< @/components/count-down-demo.vue

</details>

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` (`v-model`) | 剩余时间（毫秒） | `number` | `undefined` |

## 插槽

| 插槽名 | 子作用域 | 说明 |
| --- | --- | --- |
| `initial` | — | 当 `modelValue` 为 `0 / undefined / null` 时展示 |
| `default` | `{ seconds: number }` | 倒计时进行中展示剩余秒数 |

## 说明

当 `modelValue` 被修改为大于 `0` 的值时自动开始倒计时；归零时会自动将 `modelValue` 置为 `0`。
