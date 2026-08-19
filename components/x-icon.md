# XIcon 关闭图标

一个带悬停动效的「关闭 ✕」图标。

## 基础用法

将鼠标移到图标上查看展开动画。

<XIconDemo />

<details>
<summary>查看代码</summary>

<<< @/components/x-icon-demo.vue

</details>

## Props

| 参数          | 说明                                          | 类型     | 默认值      |
| ------------- | --------------------------------------------- | -------- | ----------- |
| `color`       | 图标颜色                                      | `string` | `"#000000"` |
| `size`        | 图标整体尺寸（数字，单位 px，同时作用于宽高） | `number` | `34`        |
| `strokeWidth` | 四周边框线的粗细（单位 px）                   | `number` | `1`         |
| `lineWidth`   | 中央 X 线条的粗细（单位 px）                  | `number` | `1`         |
| `duration`    | 动画时长                                      | `number` | `600`       |

## Events

| 事件名  | 说明           | 回调参数     |
| ------- | -------------- | ------------ |
| `click` | 点击图标时触发 | `() => void` |
