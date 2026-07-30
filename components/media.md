# Media 媒体懒加载

统一的图片 / 视频媒体组件。视频模式下基于 `IntersectionObserver` 实现：
- 进入视口才尝试播放；
- 离开视口自动暂停（`pauseWhenOutViewport`）；
- 结合 `useDocumentVisibility`，页面被隐藏（切后台 / 切换标签页）时自动暂停。

## 基础用法（视频）

<MediaDemo />

<details>
<summary>查看代码</summary>

<<< @/components/media-demo.vue

</details>

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `type` | 媒体类型 | `"image" \| "video"` | `"image"` |
| `src` | 资源地址 | `string` | — |
| `alt` | 图片 alt | `string` | `"."` |
| `poster` | 视频封面 | `string` | `""` |
| `loop` | 视频循环 | `boolean` | `true` |
| `muted` | 视频静音 | `boolean` | `true` |
| `controls` | 显示原生控制条 | `boolean` | `false` |
| `preload` | 视频预加载策略 | `string` | `"metadata"` |
| `lazy` | 是否启用视口懒加载（视频） | `boolean` | `true` |
| `pauseWhenOutViewport` | 离开视口是否暂停 | `boolean` | `true` |
| `observeOptions` | 透传给 `IntersectionObserver` 的配置（可包含 `root`） | `UseIntersectionObserverOptions` | `{}` |

## 事件（视频）

`loadstart` / `loadedmetadata` / `loadeddata` / `canplay` / `play` / `playing` / `pause` / `waiting` / `ended` / `error` / `timeupdate`

## 方法（expose）

| 方法 | 说明 |
| --- | --- |
| `play()` | 播放 |
| `pause()` | 暂停 |
| `toggle()` | 切换播放 / 暂停 |
| `video` | 原生 video 元素引用 |

## 进阶：指定 root

`observeOptions.root` 支持传入 `ref`（`MaybeRefOrGetter`）。由于模板 ref 在子元素 `mounted` 时可能尚未赋值，本组件内部已通过 `watch` 监听 `root` 变化并重建 Observer：

```vue
<script setup lang="ts">
import { ref } from "vue";
const scrollBox = ref<HTMLElement | null>(null);
</script>

<template>
    <div ref="scrollBox" style="overflow: auto; height: 300px">
        <Media type="video" src="xxx.mp4" :observe-options="{ root: scrollBox }" />
    </div>
</template>
```
