import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";

// 自动将 docs/rox-v 下所有 *-demo.vue 注册为全局组件，
// 这样在 markdown 中可直接使用 <ButtonDemo /> 等，无需逐页 import。
// @ts-ignore
const modules = import.meta.glob("../../**/*-demo.vue", { eager: true });

function toPascal(name: string): string {
    return name
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join("");
}

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        for (const path in modules) {
            const fileName = path
                .split("/")
                .pop()!
                .replace(/\.vue$/, "");
            const comp = (modules[path] as { default: unknown }).default;
            app.component(toPascal(fileName), comp as never);
        }
    },
} satisfies Theme;
