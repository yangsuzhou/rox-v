# useHorizontal

将竖向滚轮（`wheel`）事件转换为横向滚动，常用于横向时间轴、卡片长廊等场景。支持 RTL 布局与步长配置。

## 基础用法

<UseHorizontalDemo />

<details>
<summary>查看代码</summary>

<<< @/hooks/use-horizontal-demo.vue

</details>

## 签名

```ts
function useHorizontal(options?: UseHorizontalOptions): { scrollContainerRef: Ref<HTMLElement | null> };

interface UseHorizontalOptions {
    queryCondition?: string; // 选择器，优先于 scrollContainerRef
    step?: number; // 每次滚动步长，默认 15
    dir?: "rtl" | "ltr"; // 滚动方向
    allowWheel?: boolean; // 是否拦截滚轮，默认 true
}
```

## 返回值

| 字段 | 说明 |
| --- | --- |
| `scrollContainerRef` | 绑定到目标滚动容器的模板 ref |

## 说明

- 仅当 `|deltaX| <= |deltaY|` 时接管滚动，避免与已有横向滚动冲突；`deltaY !== 0` 时会 `preventDefault`。
- 组件卸载时自动移除监听器。
