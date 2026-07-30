# useDocumentVisibility

监听 `document.visibilitychange`，返回当前页面可见性（只读 `ref`）。常用于页面隐藏时暂停视频 / 轮询，恢复可见时继续。

## 基础用法

<UseDocumentVisibilityDemo />

<details>
<summary>查看代码</summary>

<<< @/hooks/use-document-visibility-demo.vue

</details>

## 签名

```ts
function useDocumentVisibility(options?: {
    window?: Window;
    initialValue?: "visible" | "hidden" | "prerender";
}): Readonly<Ref<"visible" | "hidden" | "prerender">>;
```

## 参数

| 参数 | 说明 | 默认值 |
| --- | --- | --- |
| `window` | 自定义 window 对象（SSR 友好） | `globalThis.window` |
| `initialValue` | 初始可见性 | `"visible"` |

## 返回值

只读的 `Ref<DocumentVisibilityState>`，值为 `"visible" \| "hidden" \| "prerender"`。

## 组合示例

```ts
import { useDocumentVisibility } from "@a-drowned-fish/rox-v";

const visible = useDocumentVisibility();
watch(visible, (v) => {
    if (v === "visible") resume();
    else pause();
});
```
