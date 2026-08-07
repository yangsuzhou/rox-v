import { defineConfig } from "vitepress";
import { fileURLToPath, URL } from "node:url";

const base = process.env.VITEPRESS_BASE || "/rox-v/";

export default defineConfig({
    title: "RoxV 组件库",
    description: "@a-drowned-fish/rox-v Vue3 组件与 Hooks 使用文档",
    lang: "zh-CN",
    base,
    head: [["link", { rel: "icon", href: `${base}favicon.ico` }]],
    themeConfig: {
        nav: [{ text: "首页", link: "/" }],
        sidebar: [
            {
                text: "开始",
                items: [{ text: "快速开始", link: "/index" }],
            },
            {
                text: "组件",
                items: [
                    { text: "Button 按钮", link: "/components/button" },
                    { text: "Input 输入框", link: "/components/input" },
                    { text: "InputOtp 验证码输入框", link: "/components/input-otp" },
                    { text: "Popup 弹窗", link: "/components/popup" },
                    { text: "Tab 选项卡", link: "/components/tab" },
                    // { text: "Menu 菜单", link: "/components/menu" },
                    // { text: "Select 下拉选择", link: "/components/select" },
                    { text: "SliderCaptcha 滑块验证", link: "/components/slider-captcha" },
                    { text: "CountDown 倒计时", link: "/components/count-down" },
                    { text: "Panel 面板", link: "/components/panel" },
                    { text: "Collapse 折叠面板", link: "/components/collapse" },
                    { text: "Loading 加载", link: "/components/loading" },
                    { text: "Toast 轻提示", link: "/components/toast" },
                    // { text: "DropMenu 下拉菜单", link: "/components/dropmenu" },
                    { text: "FrameSlide 相框滑块", link: "/components/frame-slide" },
                    { text: "FadeInOut 淡入淡出", link: "/components/fade-in-out" },
                    { text: "FadeInOutSlideDot 淡入淡出圆点", link: "/components/fade-in-out-slide-dot" },
                    { text: "GradientArea 渐变区域", link: "/components/gradient-area" },
                    { text: "Media 媒体懒加载", link: "/components/media" },
                ],
            },
            {
                text: "指令",
                items: [
                    { text: "v-lazy 图片懒加载", link: "/components/lazy" },
                    { text: "v-fade 淡入显隐", link: "/components/fade" },
                    { text: "v-slide-in 淡入显隐 (推荐)", link: "/components/slide-in" },
                ],
            },
            {
                text: "Hooks",
                items: [
                    { text: "useIntersectionObserver", link: "/hooks/use-intersection-observer" },
                    { text: "useScrollToElement", link: "/hooks/use-scroll-to-element" },
                    { text: "useScrollToCenter", link: "/hooks/use-scroll-to-center" },
                    { text: "useScrollToEdge", link: "/hooks/use-scroll-to-edge" },
                    { text: "useScrollIntoElement (推荐)", link: "/hooks/use-scroll-into-element" },
                    { text: "useHorizontal", link: "/hooks/use-horizontal" },
                    { text: "useDocumentVisibility", link: "/hooks/use-document-visibility" },
                ],
            },
            {
                text: "工具",
                items: [{ text: "tick 轮询工具", link: "/tick" }],
            },
        ],
        socialLinks: [{ icon: "npm", link: "https://www.npmjs.com/package/@a-drowned-fish/rox-v" }],
        footer: {
            message: "基于 MIT 协议开源",
            copyright: "Copyright © 2024-present Monster UI",
        },
    },
    vite: {
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./", import.meta.url)),
            },
        },
        ssr: {
            noExternal: [/@a-drowned-fish\/rox-v/, /fish-helper/],
        },
    },
});
