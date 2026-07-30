# Tab 选项卡

通过 `items` 声明标签项，并以 `v-model` 双向绑定当前选中索引。支持顶部标签栏（tab）、顶部面板（top）与内容面板（panel）多段插槽，便于定制丰富的选项卡布局。

## 基础用法

<TabDemo />

<details>
<summary>查看代码</summary>

<<< @/components/tab-demo.vue

</details>

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` (`v-model`) | 当前选中索引 | `number` | `0` |
| `items` | 标签项数组，每项需包含 `label` | `T[]` | `[]` |
| `trigger` | 触发切换方式 | `"click" \| "hover"` | `"click"` |
| `dir` | 文字方向 | `"ltr" \| "rtl"` | `"ltr"` |
| `animate` | 是否启用切换动画 | `boolean` | `true` |
| `gap` | 标签之间间距 | `string` | — |
| `allowWheel` | 是否支持滚轮切换 | `boolean` | `false` |
| `itemShowInCenter` | 激活项是否滚动到可视区中央 | `boolean` | `false` |
| `tabContainerClass` / `tabItemClass` | 标签容器 / 标签项类名 | `string` | `""` |
| `topPanelContainerClass` / `topPanelItemClass` | 顶部面板容器 / 项类名 | `string` | `""` |
| `panelContainerClass` / `panelItemClass` | 内容面板容器 / 项类名 | `string` | `""` |
| `activeLineClass` | 激活指示条类名 | `string` | `""` |

## 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 选中索引变化 | `(index: number) => void` |

## 插槽

| 插槽名 | 子作用域 | 说明 |
| --- | --- | --- |
| `default` | `{ item, index, active }` | 内容面板（同 `panel`） |
| `tab` | `{ item, index, active }` | 自定义标签栏项 |
| `top` | `{ item, index, active }` | 顶部面板项 |
| `panel` | `{ item, index, active }` | 内容面板项 |
| `middle` | — | 标签栏与内容区之间的自定义内容 |

## 方法（expose）

| 方法 | 说明 |
| --- | --- |
| `moveTo(index)` | 程序化切换到指定索引 |
