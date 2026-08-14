<template>
    <MasonryWall :items="items" :columns="3" :gap="12" :with-media="false">
        <template #default="{ item }">
            <div class="card">
                <img
                    :src="item.url"
                    class="card-img"
                    :width="item.w"
                    :height="item.h"
                    alt=""
                />
                <div class="card-body">{{ item.title }}</div>
            </div>
        </template>
    </MasonryWall>
</template>

<script setup lang="ts">
import { MasonryWall } from "@a-drowned-fish/rox-v";

interface SizedItem {
    url: string;
    title: string;
    w: number;
    h: number;
}

const items: SizedItem[] = [
    { url: "https://picsum.photos/seed/sx1/300/200", title: "已设尺寸 · 矮图", w: 300, h: 200 },
    { url: "https://picsum.photos/seed/sx2/300/420", title: "已设尺寸 · 高图", w: 300, h: 420 },
    { url: "https://picsum.photos/seed/sx3/300/300", title: "已设尺寸 · 方图", w: 300, h: 300 },
    { url: "https://picsum.photos/seed/sx4/300/520", title: "已设尺寸 · 长图", w: 300, h: 520 },
    { url: "https://picsum.photos/seed/sx5/300/240", title: "已设尺寸 · 横图", w: 300, h: 240 },
    { url: "https://picsum.photos/seed/sx6/300/380", title: "已设尺寸 · 中图", w: 300, h: 380 },
    { url: "https://picsum.photos/seed/sx7/300/260", title: "已设尺寸 · 窄图", w: 300, h: 260 },
    { url: "https://picsum.photos/seed/sx8/300/460", title: "已设尺寸 · 竖图", w: 300, h: 460 },
    { url: "https://picsum.photos/seed/sx9/300/320", title: "已设尺寸 · 标准", w: 300, h: 320 },
];
</script>

<style scoped>
.card {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}
.card-img {
    width: 100%;
    display: block;
    object-fit: cover;
    background: #eee;
}
.card-body {
    padding: 10px 12px 14px;
    font-size: 13px;
    color: #1f2329;
}
</style>
