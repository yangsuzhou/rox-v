# Hover 悬停

轻量的内容包裹组件，为子元素添加 `.hover` 类：在**支持 hover 的设备**（带鼠标）上子元素可交互（`pointer-events: auto`），在触屏等无 hover 能力的设备上自动禁用交互，避免移动端误触。

## 基础用法

<HoverDemo />

<details>
<summary>查看代码</summary>

<<< @/components/hover-demo.vue

</details>

## 说明

该组件本身不接收 props / 事件，仅渲染一个默认插槽。常用于需要区分「桌面端可点击、移动端不响应 hover」的场景，例如自定义的下拉触发器、悬浮卡片等。
