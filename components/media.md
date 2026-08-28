# Media 媒体懒加载

统一的图片 / 视频媒体组件：

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

| 参数                   | 说明                       | 类型                             | 默认值       |
| ---------------------- | -------------------------- | -------------------------------- | ------------ |
| `type`                 | 媒体类型                   | `"image" \| "video"`             | `"image"`    |
| `src`                  | 资源地址                   | `string`                         | —            |
| `alt`                  | 图片 alt                   | `string`                         | `"."`        |
| `poster`               | 视频封面                   | `string`                         | `""`         |
| `loop`                 | 视频循环                   | `boolean`                        | `true`       |
| `muted`                | 视频静音                   | `boolean`                        | `true`       |
| `controls`             | 显示原生控制条             | `boolean`                        | `false`      |
| `preload`              | 视频预加载策略             | `string`                         | `"metadata"` |
| `lazy`                 | 是否启用视口懒加载（视频） | `boolean`                        | `true`       |
| `pauseWhenOutViewport` | 离开视口是否暂停           | `boolean`                        | `true`       |
| `observeOptions`       | 配置（可包含 `root`）      | `UseIntersectionObserverOptions` | `{}`         |
| `pause`                | 是否暂停播放               | `boolean`                        | `false`      |

## 事件（视频）

`loadstart` / `loadedmetadata` / `loadeddata` / `canplay` / `play` / `playing` / `pause` / `waiting` / `ended` / `error` / `timeupdate`

## 方法（expose）

| 方法       | 说明                |
| ---------- | ------------------- |
| `play()`   | 播放                |
| `pause()`  | 暂停                |
| `toggle()` | 切换播放 / 暂停     |
| `video`    | 原生 video 元素引用 |
