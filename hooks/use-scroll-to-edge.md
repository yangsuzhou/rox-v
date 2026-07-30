# useScrollToEdge

将容器内匹配的元素「最小化」滚动到视口边缘（偏前则贴前边界，偏后则贴后边界）。与 `useScrollToCenter` 不同，它只滚动到刚好可见，而不是居中。

## 基础用法

<UseScrollToEdgeDemo />

<details>
<summary>查看代码</summary>

<<< @/hooks/use-scroll-to-edge-demo.vue

</details>

## 签名

```ts
function useScrollToEdge(queryCondition?: string): {
    scrollContainerRef: Ref<HTMLElement | null>;
    scroll: (selectorCondition: string, options?: ScrollOptions) => void;
};

interface ScrollOptions {
    behavior?: ScrollBehavior; // 默认 "smooth"
    direction?: "vertical" | "horizontal"; // 默认 "horizontal"
    dir?: "rtl" | "ltr" | "auto"; // 默认 "auto"
}
```

## 返回值

| 字段 | 说明 |
| --- | --- |
| `scrollContainerRef` | 滚动容器模板 ref |
| `scroll` | `(selectorCondition, options)` 滚动到匹配元素边缘 |

## 与 useScrollToCenter 的区别

- `useScrollToCenter`：把元素滚动到容器**中心**。
- `useScrollToEdge`：只把元素滚动到**刚好进入视口**（贴边），滚动位移更小。
