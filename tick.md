# tick 轮询工具

基于 `requestAnimationFrame` 的轻量时间调度工具，适合做进度动画、倒计时、轮询等需要「按帧回调 + 进度比例」的场景。

## 两个 API

```ts
import { setTickOut, setTickLoop } from "@a-drowned-fish/rox-v";
```

### setTickLoop(options, delay?)

启动一个基于 `rAF` 的循环，返回用于停止循环的 `cancel` 函数。

```ts
interface TickOptions {
    delay?: number; // 启动前的延迟（ms）
    cb?: (ratio: number) => void; // 每帧回调，ratio 为 0~1 进度
    progress?: (ratio: number) => void; // 同 cb，进度回调
}

function setTickLoop(options: TickOptions, duration?: number): () => void;
```

### setTickOut(options)

`Promise` 化的单次调度，进度到达 `1` 时 `resolve`。

```ts
function setTickOut(cb: () => void, duration?: number): () => void;
```

## 基础用法

### 进度回调

```ts
import { setTickLoop } from "@a-drowned-fish/rox-v";

const stop = setTickLoop(
    {
        delay: 2000,
        progress: (ratio) => {
            console.log("进度", ratio);
        },
    },
    1000,
);

// 需要停止时
stop();
```

### 等待一段动画结束

```ts
import { setTickOut } from "@a-drowned-fish/rox-v";

setTickOut(() => console.log("动画完成"), 1000);
```

### 无限轮询（duration 为 0）

```ts
const stop = setTickLoop(
    {
        delay: 500, // 延迟 500ms 后开始
        cb: () => {
            /* 每帧执行 */
        },
    },
    0,
);

// 满足条件后手动停止
setTimeout(stop, 5000);
```
