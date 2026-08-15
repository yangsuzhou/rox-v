# v-lazy 图片懒加载

## 基础用法

<LazyDemo />

<details>
<summary>查看代码</summary>

<<< @/components/lazy-demo.vue

</details>

## 使用方式

指令值支持「字符串」或「对象」两种形式：

```vue
<!-- 仅传入图片地址 -->
<img v-lazy="'https://example.com/a.png'" />

<!-- 传入完整配置 -->
<img
    v-lazy="{
        default: 'placeholder.png', // 进入视口前展示的占位图
        src: 'https://example.com/a.png',
        observeOptions: { rootMargin: '0px', threshold: 0.1 },
    }"
/>
```
