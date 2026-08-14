<template>
    <MasonryWall :items="items" :columns="3" :gap="12">
        <template #default="{ item }">
            <div class="card">
                <div class="card-tag">{{ item.tag }}</div>
                <div class="card-title">{{ item.title }}</div>
                <div class="card-desc">{{ item.desc }}</div>
            </div>
        </template>
    </MasonryWall>
</template>

<script setup lang="ts">
import { MasonryWall } from "@a-drowned-fish/rox-v";

interface TextItem {
    tag: string;
    title: string;
    desc: string;
}

const items: TextItem[] = [
    { tag: "前端", title: "响应式布局", desc: "通过 flex 与 grid 的组合，在不同断点下自动调整列数，无需编写媒体查询即可获得良好的多端体验。" },
    { tag: "设计", title: "色彩对比", desc: "高对比文字在弱光环境下依然清晰可读。" },
    { tag: "工程", title: "构建提速", desc: "使用持久化缓存与按需编译，冷启动时间从 12s 降到 2s。" },
    { tag: "算法", title: "最短列优先", desc: "这是瀑布流的核心：每次把新元素放入当前最矮的一列，从而保持整体视觉平衡。" },
    { tag: "体验", title: "骨架屏", desc: "首屏占位，减少等待焦虑。" },
    { tag: "前端", title: "组合式函数", desc: "useXxx 让逻辑可跨组件复用，配合 shallowRef 还能避免深响应式的性能损耗。" },
    { tag: "产品", title: "信息密度", desc: "在有限空间内呈现更多内容，同时保留呼吸感。" },
    { tag: "工程", title: "SSR 安全", desc: "在服务器端渲染时跳过媒体等待逻辑，避免阻塞。" },
    { tag: "设计", title: "圆角与留白", desc: "10px 圆角搭配 12px 间距，整体更轻盈。" },
];
</script>

<style scoped>
.card {
    background: #fff;
    border-radius: 10px;
    padding: 14px 16px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}
.card-tag {
    display: inline-block;
    font-size: 12px;
    color: #4f7cff;
    background: #eef3ff;
    border-radius: 6px;
    padding: 2px 8px;
}
.card-title {
    margin-top: 8px;
    font-size: 15px;
    font-weight: 600;
    color: #1f2329;
}
.card-desc {
    margin-top: 6px;
    font-size: 13px;
    line-height: 1.6;
    color: #8a919f;
}
</style>
