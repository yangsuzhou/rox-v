# v-slide-in 滑入动画指令

## 基础用法

<SlideInDemo />

<details>
<summary>查看代码</summary>

<<< @/components/slide-in-demo.vue

</details>

## 指令用法

### 默认用法

使用默认参数，元素从下方 100px 处滑入，动画时长 300ms，延迟 300ms。

```vue
<div v-slide-in>内容</div>
```

### 自定义参数

通过指令值传入自定义配置对象：

```vue
<!-- 从左侧滑入 -->
<div v-slide-in="{ x: -100, y: 0 }">内容</div>

<!-- 从上方滑入 -->
<div v-slide-in="{ y: -100 }">内容</div>

<!-- 自定义时长和延迟 -->
<div v-slide-in="{ duration: 800, delay: 500 }">内容</div>
```

### 双向动画

使用 `.both` modifier 启用双向动画：进入视口时正向播放，离开视口时反向播放。

```vue
<div v-slide-in.both="{ y: 100 }">内容</div>
```

### 传入数字（简写）

直接传入数字等价于设置 `delay`：

```vue
<!-- 延迟 500ms 后执行动画 -->
<div v-slide-in="500">内容</div>
```

## 指令值类型

```ts
type SlideInBindingValue =
    | number // 等价于 delay
    | {
          duration?: number; // 动画时长（ms），默认 300
          delay?: number; // 进入视口后延迟开始（ms），默认 300
          x?: number; // X 轴起始位移（px），默认 0
          y?: number; // Y 轴起始位移（px），默认 100
          z?: number; // Z 轴起始位移（px），默认 0
          ease?: string; // 缓动函数，默认 'ease-in'
          startOpacity?: number; // 起始透明度（0-1），默认 0
          endOpacity?: number; // 结束透明度（0-1），默认 1
          observeOptions?: UseIntersectionObserverOptions; // IntersectionObserver 配置
      };
```

## Modifiers

| Modifier | 说明                                             |
| -------- | ------------------------------------------------ |
| `both`   | 启用双向动画：进入视口正向播放，离开视口反向播放 |

## 参数说明

| 参数             | 类型                             | 默认值                   | 说明                                                                         |
| ---------------- | -------------------------------- | ------------------------ | ---------------------------------------------------------------------------- |
| `duration`       | `number`                         | `300`                    | 动画时长（毫秒）                                                             |
| `delay`          | `number`                         | `300`                    | 进入视口后延迟多久开始动画（毫秒）                                           |
| `x`              | `number`                         | `0`                      | X 轴起始位移（像素），负值表示从左侧进入                                     |
| `y`              | `number`                         | `100`                    | Y 轴起始位移（像素），负值表示从上方进入                                     |
| `z`              | `number`                         | `0`                      | Z 轴起始位移（像素），用于 3D 效果                                           |
| `ease`           | `string`                         | `'ease-in'`              | CSS 缓动函数，支持 `ease`、`ease-in`、`ease-out`、`ease-in-out`、`linear` 等 |
| `startOpacity`   | `number`                         | `0`                      | 动画起始透明度（0-1）                                                        |
| `endOpacity`     | `number`                         | `1`                      | 动画结束透明度（0-1）                                                        |
| `withMedia`      | `boolean`                        | `false`                  | (慎用) 元素内部是否存在媒体资源 ，默认 `false`                               |
| `mediaTimeout`   | `number`                         | `10000`                  | 媒体资源加载超时时间（毫秒），默认 10000ms                                   |
| `observeOptions` | `UseIntersectionObserverOptions` | `{ rootMargin: '-2px' }` | IntersectionObserver 配置项                                                  |

#### withMedia为true时的注意事项

- 当 `withMedia` 为 `true` 且 内部 媒体资源 还是 懒加载情况下，注意x、y、z轴的位移值，如果偏移后出现在视口外，动画将无法正常进行。
- 如果内部资源存在懒加载情况，建议控制x、y、z，确保偏移后的元素也在视口内
- 如果内部资源不是懒加载，可以正常更改x、y、z轴的位移值。

### 示例

## 使用场景

- 页面滚动时的内容渐入效果
- 列表项依次滑入动画
- 需要重复触发的滚动动画（使用 `.both` modifier）
