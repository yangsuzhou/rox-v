# SliderCaptcha 滑块验证

拼图式滑块验证码组件。用户拖动滑块完成拼图对齐，通过 `verify` 回调进行校验，并触发 `success` / `fail` 事件。

## 基础用法

<SliderCaptchaDemo />

<details>
<summary>查看代码</summary>

<<< @/components/slider-captcha-demo.vue

</details>

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `background` | 背景图地址 | `string` | — |
| `block` | 拼图滑块图地址 | `string` | — |
| `width` | 容器宽度（px） | `number` | `300` |
| `blockTop` | 拼图距顶部距离（px） | `number` | `0` |
| `verify` | 校验回调，返回布尔值（可异步） | `(option: RoxVSliderCaptchaTrackItem) => boolean \| Promise<boolean>` | — |
| `trackBlockBg` | 滑轨滑块背景色 | `string` | — |
| `trackBg` | 滑轨背景色 | `string` | — |
| `trackClass` | 滑轨容器类名 | `string` | `""` |
| `trackThumbClass` | 滑轨滑块类名 | `string` | `""` |

### RoxVSliderCaptchaTrackItem

```ts
interface RoxVSliderCaptchaTrackItem {
    x: number; // 滑块横向位移
    t: number; // 耗时（ms）
    xPercent: number; // 位移百分比
}
```

## 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `success` | 校验通过 | `() => void` |
| `fail` | 校验失败 | `() => void` |

## 插槽

| 插槽名 | 说明 |
| --- | --- |
| `default` | 滑轨滑块内的自定义内容 |
| `verify-success` | 验证成功时的提示内容 |
| `verify-fail` | 验证失败时的提示内容 |
