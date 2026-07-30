# RoxV 组件库文档

基于 VitePress 构建的 [RoxV](https://www.npmjs.com/package/@a-drowned-fish/rox-v) Vue3 组件库使用文档站。

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建静态站点
pnpm build

# 预览构建产物
pnpm preview
```

## 目录结构

```
docs/rox-v/
├── .vitepress/          # VitePress 配置
│   ├── config.ts        # 站点配置
│   └── public/          # 静态资源
├── components/          # 组件文档 (Markdown + 演示 Demo)
│   ├── button.md
│   ├── button-demo.vue
│   ├── input.md
│   ├── ...
├── hooks/               # Hooks 文档 (Markdown + 演示 Demo)
│   ├── use-scroll-to-edge.md
│   ├── use-scroll-to-edge-demo.vue
│   ├── ...
├── index.md             # 首页
├── tick.md              # tick 轮询工具文档
└── package.json
```

每个组件/Hook 文档由两部分组成：
- `.md` 文件：文档正文（API 说明、使用示例等）
- `.vue` 文件：交互式演示 Demo

## 覆盖的模块

| 类别 | 内容 |
|------|------|
| **组件** | Button, Input, InputOtp, Popup, Tab, Menu, Select, SliderCaptcha, CountDown, Panel, Collapse, Loading, Toast, DropMenu, FrameSlide, FadeInOut, GradientArea, Media |
| **指令** | v-lazy 图片懒加载、v-fade 淡入显隐 |
| **Hooks** | useIntersectionObserver, useScrollToElement, useScrollToCenter, useScrollToEdge, useHorizontal, useDocumentVisibility |
| **工具** | tick 轮询调度器 |

## 技术栈

- [VitePress](https://vitepress.dev/) - 静态站点生成器
- [Vue 3](https://vuejs.org/) - 前端框架
- [@a-drowned-fish/rox-v](https://www.npmjs.com/package/@a-drowned-fish/rox-v) - 组件库本体
