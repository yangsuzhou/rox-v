# useScrollIntoElement

将容器内匹配的元素滚动到可视区域内。支持纵向和横向滚动，并兼容 RTL 布局。

## 基础用法

```vue
<template>
    <div ref="containerRef" class="scroll-container">
        <div v-for="i in 20" :key="i" :id="`item-${i}`" class="item">Item {{ i }}</div>
    </div>
    <button @click="scrollToItem(10)">滚动到第 10 项</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useScrollIntoElement } from "@a-drowned-fish/rox-v";

const containerRef = ref<HTMLElement | null>(null);
const { scroll } = useScrollIntoElement(containerRef);

const scrollToItem = (index: number) => {
    scroll({
        selector: `#item-${index}`,
        vertical: false,
        behavior: "smooth",
    });
};
</script>

<style scoped>
.scroll-container {
    width: 300px;
    height: 200px;
    overflow: auto;
    border: 1px solid #ddd;
}

.item {
    padding: 10px;
    border-bottom: 1px solid #eee;
}
</style>
```

## 使用 scrollRef

如果不传 `container` 参数，可以使用返回的 `scrollRef` 作为模板 ref：

```vue
<template>
    <div ref="scrollRef" class="scroll-container">
        <div v-for="i in 20" :key="i" :id="`item-${i}`" class="item">Item {{ i }}</div>
    </div>
    <button @click="scrollToItem(10)">滚动到第 10 项</button>
</template>

<script setup lang="ts">
import { useScrollIntoElement } from "@a-drowned-fish/rox-v";

const { scroll, scrollRef } = useScrollIntoElement();

const scrollToItem = (index: number) => {
    scroll({
        selector: `#item-${index}`,
        vertical: false,
        behavior: "smooth",
    });
};
</script>
```

## RTL 布局示例

```vue
<template>
    <div ref="scrollRef" class="scroll-container" style="direction: rtl">
        <div v-for="i in 20" :key="i" :id="`item-${i}`" class="item">项目 {{ i }}</div>
    </div>
    <button @click="scrollToItem(10)">滚动到第 10 项</button>
</template>

<script setup lang="ts">
import { useScrollIntoElement } from "@a-drowned-fish/rox-v";

const { scroll, scrollRef } = useScrollIntoElement();

const scrollToItem = (index: number) => {
    scroll({
        selector: `#item-${index}`,
        vertical: false,
        dir: "rtl",
        behavior: "smooth",
    });
};
</script>
```

## 参数

| 参数        | 说明                 | 类型                                             | 默认值                                         |
| ----------- | -------------------- | ------------------------------------------------ | ---------------------------------------------- |
| `container` | 滚动容器元素（可选） | `MaybeRefOrGetter<Element \| null \| undefined>` | 使用 `scrollRef` 或 `document.documentElement` |

## 返回值

| 字段        | 说明                                      |
| ----------- | ----------------------------------------- |
| `scroll`    | `(arg: ScrollArg)` 滚动到匹配选择器的元素 |
| `scrollRef` | 模板 ref，用于绑定滚动容器元素            |

## ScrollArg 选项

| 属性       | 说明                       | 类型                       | 默认值     |
| ---------- | -------------------------- | -------------------------- | ---------- |
| `selector` | 目标元素的选择器           | `string`                   | 必填       |
| `vertical` | 是否纵向滚动               | `boolean`                  | `true`     |
| `behavior` | 滚动行为                   | `ScrollBehavior`           | `"smooth"` |
| `dir`      | 布局方向（横向滚动时生效） | `"ltr" \| "rtl" \| "auto"` | `"auto"`   |

## 说明

- 容器的确定优先级：`container` 参数 → `scrollRef.value` → `document.documentElement`
- 纵向滚动时，`dir` 参数不生效
- 横向滚动时，`dir` 参数用于正确处理 RTL 布局下的滚动方向
- RTL 布局下，横向滚动的坐标系统会自动适配，确保滚动到正确位置
