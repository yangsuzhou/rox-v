# Toast 轻提示

全局轻提示，通过 `useToast()` 组合式函数触发，需要在应用内挂载一次 `<Toaster />` 作为渲染容器。

## 基础用法

<ToastDemo />

<details>
<summary>查看代码</summary>

<<< @/components/toast-demo.vue

</details>

## 使用方式

```ts
import { useToast, Toaster } from "@a-drowned-fish/rox-v";

// 1. 在根组件挂载一次渲染容器
<Toaster />;

// 2. 在任意组件调用
const { toast, success, error, warning, info, addToast, removeToast, toasts } = useToast();

toast("普通提示");
success("成功");
error("失败");
warning("警告");
info("信息");
```

## useToast 返回值

| 名称 | 说明 |
| --- | --- |
| `toast(message, options?)` | 弹出默认（info）提示 |
| `success(message, options?)` | 成功提示 |
| `error(message, options?)` | 错误提示 |
| `warning(message, options?)` | 警告提示 |
| `info(message, options?)` | 信息提示 |
| `addToast(options)` | 传入完整 `ToastOptions` |
| `removeToast(id)` | 根据 id 关闭某条提示 |
| `toasts` | 当前所有提示的响应式数组 |

### ToastOptions

| 字段 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `message` | 提示文本 | `string` | `""` |
| `duration` | 自动关闭时长（ms），`0` 不自动关闭 | `number` | `2000` |
| `type` | 类型 | `"success" \| "error" \| "info" \| "warning"` | `"info"` |
| `iconVisible` | 是否显示图标 | `boolean` | `true` |
| `itemStyle` | 单条自定义样式 | `StyleValue` | — |
| `itemClass` | 单条自定义类名 | `string` | — |

## Toaster Props（渲染容器）

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `to` | Teleport 目标 | `string` | `"body"` |
| `bg` | 提示背景色 | `string` | — |
| `top` / `bottom` | 垂直位置 | `string` | — |
| `toasterClass` / `titleClass` / `messageClass` | 各级类名 | `string` | `""` |
| `toasterStyle` / `itemStyle` | 自定义样式 | `StyleValue` | — |
