# Menu 菜单

支持多级嵌套的菜单组件，可通过 `items` 递归声明子菜单。选中项通过 `v-model` 以数组形式维护（`[父key, 子key, ...]`）。

## 基础用法

<MenuDemo />

<details>
<summary>查看代码</summary>

<<< @/components/menu-demo.vue

</details>

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` (`v-model`) | 选中项的 key 路径 | `(string \| number)[]` | `[]` |
| `items` | 菜单数据，见下方结构 | `RoxVMenuOptionProps[]` | `[]` |
| `duration` | 展开/收起动画时长（ms） | `number` | `150` |
| `selectable` | 是否可选中 | `boolean` | `true` |
| `itemGap` | 子项间距 | `string` | — |
| `activeItemClass` | 选中项类名 | `string` | — |
| `checkedIcon` / `checkedIconClass` | 选中图标 / 类名 | `string` | — |
| `suffixIcon` / `suffixIconClass` | 后缀图标 / 类名 | `string` | — |
| `listContainerClass` / `defaultContainerClass` / `subMenuContainerClass` / `itemContainerClass` | 各级容器类名 | `string` | `""` |

### MenuItem 数据结构

```ts
interface RoxVMenuOptionProps {
    key: string | number;
    label: string;
    type?: "group"; // 分组标题
    icon?: string;
    disabled?: boolean;
    children?: RoxVMenuOptionProps[];
}
```

## 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 选中项变化 | `(keys: (string \| number)[]) => void` |
| `open` | 展开子菜单 | `(key: string \| number) => void` |
| `close` | 收起子菜单 | `(key: string \| number) => void` |
| `menu-item-click` | 点击菜单项 | `(item: RoxVMenuOptionProps) => void` |

## 插槽

| 插槽名 | 说明 |
| --- | --- |
| `default` | 自定义菜单项触发器（默认渲染 `label`） |

## 方法（expose）

| 方法 | 说明 |
| --- | --- |
| `getSelectedItem()` | 获取当前选中的菜单项对象 |
