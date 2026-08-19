# XIcon 关闭图标

一个带悬停动效的「关闭 ✕」图标。默认由四条边框线组成，鼠标**悬停（hover）** 时边框线向中心收起、中央的 X 线条旋转展开，形成「框 → X」的过渡动画；移出后还原。点击图标会触发 `click` 事件。

## 基础用法

将鼠标移到图标上查看展开动画。

<XIconDemo />

<details>
<summary>查看代码</summary>

<<< @/components/x-icon-demo.vue

</details>

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `color` | 图标颜色 | `string` | `"#000000"` |
| `size` | 图标整体尺寸（数字，单位 px，同时作用于宽高） | `number` | `34` |
| `strokeWidth` | 四周边框线的粗细（单位 px） | `number` | `1` |
| `lineWidth` | 中央 X 线条的粗细（单位 px） | `number` | `1` |
| `duration` | 动画时长（单位 ms，X 线条旋转时长；边框线取 1/4） | `number` | `600` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click` | 点击图标时触发 | `() => void` |

## 说明

- 动画由 `:hover` 驱动：四周边框线用 `scale3d` 缩放进出，中央两条 X 线条用 `rotate3d(0,0,1,45deg → 180deg)` 旋转展开，无需 JS 控制。
- `duration` 同时控制 X 线条的旋转时长与边框线的分段延迟（每段取 `duration / 4`）。
