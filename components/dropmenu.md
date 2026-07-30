# DropMenu 下拉菜单

点击触发器展开 / 收起的下拉容器，支持 `fade` 与 `slide` 两种过渡动画。

## 基础用法

<DropMenuDemo />

<details>
<summary>查看代码</summary>

<<< @/components/dropmenu-demo.vue

</details>

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` (`v-model`) | 是否展开 | `boolean` | `false` |
| `type` | 过渡动画类型 | `"fade" \| "slide"` | `"fade"` |
| `duration` | 动画时长（ms） | `number` | `150` |
| `maxHeight` | 内容最大高度（px） | `number` | `388` |

## 插槽

| 插槽名 | 说明 |
| --- | --- |
| `default` | 触发器（默认插槽） |
| `list` | 下拉内容 |

## 说明

点击触发器会切换 `v-model`；内容容器通过 `@click.stop` 阻止冒泡，点击内容区域不会关闭。
