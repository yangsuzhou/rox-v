---
layout: home

hero:
    name: RoxV
    text: Vue3 组件库
    tagline: 一套轻量、可组合的基础 UI 组件、指令与 Hooks
    actions:
        - theme: brand
          text: 快速开始
          link: /components/button
        - theme: alt
          text: 组件总览
          link: /components/button

features:
    - title: 基础组件
      details: Button、Input、InputOtp、Popup、Tab、Menu、Select 等常用表单与交互组件，开箱即用。
    - title: 指令
      details: v-lazy 图片懒加载、v-fade 显隐淡入，几行代码即可为元素添加高性能行为。
    - title: Hooks
      details: IntersectionObserver、滚动定位、横向拖拽、页面可见性等组合式函数，复用视口与滚动逻辑。
    - title: 轮询工具
      details: tick 提供可控制的轮询调度，支持 start / stop / once / delay。
---

## 安装

```bash
pnpm add @a-drowned-fish/rox-v
```

## 全量引入

```ts
import { createApp } from "vue";
import RoxV from "@a-drowned-fish/rox-v";
// import "@a-drowned-fish/rox-v/dist/style.css"; // 如果需要样式 (SSR OR SSG 建议引入， 避免页面样式闪烁)

createApp(App).use(RoxV).mount("#app");
```

## 按需引入

```ts
import { Button, Input } from "@a-drowned-fish/rox-v";

export default {
    components: { Button, Input },
};
```

## 指令与 Hooks

```ts
import { vLazy, vFade, useIntersectionObserver } from "@a-drowned-fish/rox-v";
```
