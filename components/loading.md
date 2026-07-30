# Loading 加载

三点弹性加载动画，默认绝对定位铺满父容器，常用于覆盖在内容区域上表示加载中。

## 基础用法

<LoadingDemo />

<details>
<summary>查看代码</summary>

<<< @/components/loading-demo.vue

</details>

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `visible` | 是否显示 | `boolean` | `false` |
| `bg` | 遮罩背景色 | `string` | `"transparent"` |
| `dotColor` | 圆点颜色 | `string` | `"#1a171b"` |
| `dotSize` | 圆点尺寸 | `string` | `"8px"` |
| `dotGap` | 圆点间距 | `string` | `"4px"` |
| `amplitude` | 弹跳幅度 | `string` | `"15px"` |

## 说明

组件采用 `position: absolute` 铺满父级，请将其放置在具有 `position: relative` 且设定了尺寸的容器内。
