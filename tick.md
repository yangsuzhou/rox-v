# tick 轮询工具

基于 `requestAnimationFrame` 的轻量时间调度工具，适合做进度动画、倒计时、轮询等需要「按帧回调 + 进度比例」的场景。

## 两个 API

```ts
import { tick, setTickLoop } from "@a-drowned-fish/rox-v";
```

### setTickLoop(options, delay?)

启动一个基于 `rAF` 的循环，返回用于停止循环的 `cancel` 函数。

```ts
interface TickOptions {
    duration?: number; // 总时长（ms），0 表示无限循环
    delay?: number; // 启动前的延迟（ms）
    cb?: (ratio: number) => void; // 每帧回调，ratio 为 0~1 进度
    progress?: (ratio: number) => void; // 同 cb，进度回调
}

function setTickLoop(options: TickOptions, delay?: number): () => void;
```

### tick(options)

`Promise` 化的单次调度，进度到达 `1` 时 `resolve`。

```ts
function tick(options: TickOptions): Promise<void>;
```

## 基础用法

### 进度回调

```ts
import { setTickLoop } from "@a-drowned-fish/rox-v";

const stop = setTickLoop(
    {
        duration: 2000,
        progress: (ratio) => {
            console.log("进度", ratio);
        },
    },
    16,
);

// 需要停止时
stop();
```

### 等待一段动画结束

```ts
import { tick } from "@a-drowned-fish/rox-v";

await tick({ duration: 1000, progress: (r) => (bar.value = r) });
console.log("动画完成");
```

### 无限轮询（duration 为 0）

```ts
const stop = setTickLoop({
    duration: 0, // 不自动停止
    delay: 500, // 延迟 500ms 后开始
    cb: () => {
        /* 每帧执行 */
    },
});

// 满足条件后手动停止
setTimeout(stop, 5000);
```

## 说明

- `delay` 默认 `16`（约一帧），仅在需要「延迟启动」时显式传值。
- `ratio` 在 `duration > 0` 时按 `已用时间 / duration` 计算并 clamp 到 `[0, 1]`；`duration` 为 `0` 时 `ratio` 恒为 `1`。
- 返回的 `cancel` 函数会 `cancelAnimationFrame` 并终止循环，务必在组件卸载或不再需要时调用，避免内存泄漏。
