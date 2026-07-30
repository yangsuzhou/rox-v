# useScrollToElement

将滚动容器内指定索引（或最后一项）的子元素滚动到可视区域，底层使用原生 `scrollIntoView`。

## 基础用法

<UseScrollToElementDemo />

<details>
<summary>查看代码</summary>

<<< @/hooks/use-scroll-to-element-demo.vue

</details>

## 签名

```ts
function useScrollToElement(queryCondition?: string): {
    scrollContainerRef: Ref<HTMLElement | null>;
    scroll: (
        pos: number | "latest",
        options?: boolean | ScrollIntoViewOptions,
        dir?: "ltr" | "rtl" | "auto",
    ) => void;
};
```

## 参数

| 参数 | 说明 |
| --- | --- |
| `queryCondition` | 选择器，指定滚动容器；不传则使用 `scrollContainerRef` |

### scroll 方法

| 参数 | 说明 |
| --- | --- |
| `pos` | 子元素索引（`number`）或 `"latest"`（最后一项） |
| `options` | 透传给 `scrollIntoView` 的选项（`boolean` 或 `ScrollIntoViewOptions`） |
| `dir` | 书写方向；`"rtl"` 时对第一项 / 最后一项做镜像处理 |

## 返回值

| 字段 | 说明 |
| --- | --- |
| `scrollContainerRef` | 滚动容器模板 ref |
| `scroll` | 执行滚动的方法 |
