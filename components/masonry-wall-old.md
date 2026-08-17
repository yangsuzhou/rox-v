# MasonryWall 瀑布流

## 纯文本（无图片）

<MasonryWallTextDemo />

<details>
<summary>查看代码</summary>

<<< @/components/masonry-wall-text-demo.vue

</details>

## 媒体资源宽高已知（withMedia=false）

<MasonryWallSizedDemo />

<details>
<summary>查看代码</summary>

<<< @/components/masonry-wall-sized-demo.vue

</details>

## 媒体资源高度未知

<MasonryWallDemo />

<details>
<summary>查看代码</summary>

<<< @/components/masonry-wall-demo.vue

</details>

## 使用方式

```vue
<script setup lang="ts">
import { MasonryWall } from "@a-drowned-fish/rox-v";

interface PhotoItem {
    url: string;
    title: string;
}

const items: PhotoItem[] = [
    /* ... */
];
</script>

<template>
    <MasonryWall :items="items" :columns="3" :gap="12">
        <template #default="{ item }">
            <img :src="item.url" :alt="item.title" />
        </template>
    </MasonryWall>
</template>
```

## Props

| 属性           | 类型      | 默认值   | 说明                                          |
| -------------- | --------- | -------- | --------------------------------------------- |
| `items`        | `Array`   | `[]`     | 数据源，支持任意类型                          |
| `columns`      | `number`  | `3`      | 初始列数                                      |
| `rowGap`       | `number`  | 取 `gap` | 列内 item 纵向间距（px）                      |
| `colGap`       | `number`  | 取 `gap` | 列与列横向间距（px）                          |
| `gap`          | `number`  | `10`     | 间距兜底，未单独设置 `rowGap`/`colGap` 时生效 |
| `withMedia`    | `boolean` | `false`  | 是否等待媒体资源加载                          |
| `mediaTimeout` | `number`  | `10000`  | 媒体等待超时（毫秒）                          |

### withMedia 应该何时设为true

- 只有当布局中存在的媒体资源是未知宽高或者媒体资源父容器未设置宽高时，才需要设置为 true。否则，可以设置为 false 以提升性能。

## 插槽

### default

| 作用域属性 | 类型     | 说明                              |
| ---------- | -------- | --------------------------------- |
| `item`     | `any`    | 当前 item 数据                    |
| `column`   | `number` | 当前所在列的索引（从 0 开始）     |
| `index`    | `number` | 当前列内 item 的索引（从 0 开始） |

```vue
<template #default="{ item, column, index }">
    <div>{{ column }} - {{ index }}: {{ item }}</div>
</template>
```
