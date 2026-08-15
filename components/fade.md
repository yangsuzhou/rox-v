# v-fade 淡入显隐

元素进入视口时，从「透明度 0 + 向下偏移 `distance`」平滑过渡到「完全显示」，只播放一次。

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
