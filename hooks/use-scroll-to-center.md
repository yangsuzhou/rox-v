# useScrollToCenter

将容器内匹配的元素「最小化」滚动到视口中心。若元素已在视口中且未设置 `force`，则不滚动。

## 基础用法

<UseScrollToCenterDemo />

<details>
<summary>查看代码</summary>

<<< @/hooks/use-scroll-to-center-demo.vue

</details>

## 签名

```ts
function useScrollToCenter(queryCondition?: string): {
    scrollContainerRef: Ref<HTMLElement | null>;
    scroll: (selectorCondition: string, options?: ScrollOptions) => void;
};

interface ScrollOptions {
    behavior?: ScrollBehavior; // 默认 "smooth"
    direction?: "vertical" | "horizontal"; // 默认 "horizontal"
    force?: boolean; // 是否强制滚动，默认 false
    dir?: "rtl" | "ltr" | "auto"; // 书写方向，默认 "auto"（按容器实际 direction 计算）
}
```

## 返回值

| 字段 | 说明 |
| --- | --- |
| `scrollContainerRef` | 滚动容器模板 ref（也可以 `queryCondition` 选择器指定） |
| `scroll` | `(selectorCondition, options)` 滚动到匹配元素中心 |

## 说明

- 同时支持横向与纵向，并对 RTL 布局做了 `scrollLeft` 符号归一化。
- 若不传 `queryCondition`，则使用 `scrollContainerRef` 作为容器。
