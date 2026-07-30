# v-fade 淡入显隐

元素进入视口时，从「透明度 0 + 向下偏移 `distance`」平滑过渡到「完全显示」，只播放一次。基于 `IntersectionObserver` 与 `setTickOut` 实现。

## 基础用法

<FadeDemo />

<details>
<summary>查看代码</summary>

<<< @/components/fade-demo.vue

</details>

## 使用方式

指令值支持「数字」或「对象」两种形式：

```vue
<!-- 仅设置延迟（ms） -->
<div v-fade="300">...</div>

<!-- 完整配置 -->
<div v-fade="{ duration: 800, delay: 200, distance: 60 }">...</div>

<!-- 不传值：使用默认参数 -->
<div v-fade>...</div>
```

## 指令值类型

```ts
type FadeBindingValue =
    | number // 等价于 delay
    | {
          duration?: number; // 动画时长（ms），默认 500
          delay?: number; // 进入视口后延迟开始（ms），默认 0
          distance?: number; // 起始向下偏移量（px），默认 40
          observeOptions?: UseIntersectionObserverOptions;
      };
```

## 说明

- 动画仅触发一次：进入视口后标记 `played` 并 `disconnect` 观察。
- `observeOptions.root` 同样支持传入 `ref`，用法同 [v-lazy](./lazy#指定滚动容器-root-重要)。
