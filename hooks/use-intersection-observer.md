# useIntersectionObserver

对 `IntersectionObserver` 的轻量封装，支持传入 `ref` / `getter` 形式的 `target` 与 `root`，并在它们变化时自动重建观察。

## 基础用法

<UseIntersectionObserverDemo />

<details>
<summary>查看代码</summary>

<<< @/hooks/use-intersection-observer-demo.vue

</details>

## 签名

```ts
function useIntersectionObserver(
    target: MaybeRefOrGetter<Element | null | undefined>,
    callback: IntersectionObserverCallback,
    options?: UseIntersectionObserverOptions,
): { observe: () => void; disconnect: () => void };
```

## 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 被观察的元素，可传 `ref` / `getter` / 直接元素 |
| `callback` | `IntersectionObserver` 回调，接收 `(entries, observer)` |
| `options` | 同 `IntersectionObserver` 配置，其中 `root` 支持 `ref`（`MaybeRefOrGetter`） |

### UseIntersectionObserverOptions

通过 `Omit<IntersectionObserverInit, "root">` 重新定义 `root`，从而支持传入响应式引用：

```ts
interface UseIntersectionObserverOptions extends Omit<IntersectionObserverInit, "root"> {
    root?: MaybeRefOrGetter<Element | Document | null | undefined>;
}
```

## 返回值

| 字段 | 说明 |
| --- | --- |
| `observe` | 立即（重新）创建并启动观察 |
| `disconnect` | 断开观察并释放资源 |

## 说明

- 内部通过 `watch(target, root)` 监听变化，当 `root` 由 `null` 变为实际元素（如模板 ref 被填充）时会重建 Observer。
- 组件卸载（`onBeforeUnmount`）时自动 `disconnect`。
