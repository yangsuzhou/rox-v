# v-lazy 图片懒加载

## 基础用法

<LazyDemo />

<details>
<summary>查看代码</summary>

<<< @/components/lazy-demo.vue

</details>

## 使用方式

指令值支持「字符串」或「对象」两种形式：

```vue
<!-- 仅传入图片地址 -->
<img v-lazy="'https://example.com/a.png'" />

<!-- 传入完整配置 -->
<img
    v-lazy="{
        default: 'placeholder.png', // 进入视口前展示的占位图
        src: 'https://example.com/a.png',
        observeOptions: { rootMargin: '0px', threshold: 0.1 },
    }"
/>
```

## 指令值类型

```ts
type LazyBindingValue =
    | string // 直接作为 src
    | {
          default?: string; // 占位图
          src: string; // 真实图片地址
          observeOptions?: UseIntersectionObserverOptions; // 透传 Observer 配置
      };
```

## 指定滚动容器 root（重要）

`observeOptions.root` 支持传入 `ref`（`MaybeRefOrGetter`）。由于 Vue 模板在 **render 阶段**就会对 `v-lazy` 的绑定值求值，如果写成 `observeOptions: { root: parent.value }`，此时 `parent.value` 还是 `null`，`root` 会被错误地固定为 `null`。

**正确做法是传入 ref 本身（不要加 `.value`）：**

```vue
<script setup lang="ts">
import { ref } from "vue";
const scrollBox = ref<HTMLElement | null>(null);
</script>

<template>
    <div ref="scrollBox" style="overflow: auto; height: 300px">
        <img v-lazy="{ src: 'a.png', observeOptions: { root: scrollBox } }" />
    </div>
</template>
```

组件内部已通过 `watch(root)` 监听 ref 变化并在其被赋值后重建 Observer，因此 `mounted` 时 `root` 为 `null` 也能在后续正确生效。
