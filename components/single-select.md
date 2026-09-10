# SingleSelect 单选

轻量的单选下拉组件。点击触发器展开选项列表，选中后通过 `change` 事件回调并自动收起；点击组件外部区域也会自动收起。

## 基础用法

<SingleSelectDemo />

<details>
<summary>查看代码</summary>

<<< @/components/single-select-demo.vue

</details>

## Props

| 参数           | 说明                                   | 类型                | 默认值      |
| -------------- | -------------------------------------- | ------------------- | ----------- |
| `items`        | 选项数据数组                           | `Array<any>`        | `[]`        |
| `duration`     | 展开 / 收起过渡动画时长（ms）          | `number`            | `150`       |
| `animation`    | 过渡动画类型                           | `"fade" \| "slide"` | `"fade"`    |
| `maxHeight`    | 选项列表容器最大高度（px），超出可滚动 | `number`            | `260`       |
| `bg`           | 选项列表容器背景色                     | `string`            | `"#ffffff"` |
| `offsetY`      | 选项列表纵向偏移（px）                 | `number`            | `10`        |
| `offsetX`      | 选项列表横向偏移（px）                 | `number`            | `0`         |
| `optionsClass` | 选项列表容器自定义类名                 | `string`            | `""`        |

## 事件

| 事件名          | 说明                      | 回调参数                              |
| --------------- | ------------------------- | ------------------------------------- |
| `change`        | 选中某一项时触发          | `(value: any, index: number) => void` |
| `visibleChange` | 展开 / 收起状态变化时触发 | `(visible: boolean) => void`          |

## 插槽

| 插槽名    | 子作用域          | 说明                                |
| --------- | ----------------- | ----------------------------------- |
| `default` | `{ visible }`     | 触发器显示内容，点击切换展开 / 收起 |
| `option`  | `{ item, index }` | 自定义选项渲染，`item` 为对应数据项 |

## 说明

- 组件内部维护展开状态 `visible`（**初始为收起 `false`**），点击触发器切换，点击外部或选中选项后收起。
- 选中值不由组件托管，需通过 `change` 事件自行保存，组件不提供 `v-model`。
- 展开 / 收起状态变化会触发 `visibleChange` 事件；`default` 插槽暴露的 `visible` 可用于控制触发器箭头旋转等视觉反馈。
- `bg` / `offsetX` / `offsetY` / `optionsClass` 用于定制选项列表的背景色、位置偏移与额外类名。
