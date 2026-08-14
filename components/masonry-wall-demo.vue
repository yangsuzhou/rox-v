<template>
    <MasonryWall
        :items="items"
        :columns="3"
        :gap="12"
        :with-media="true"
        :media-timeout="10000"
    >
        <template #default="{ item }">
            <div class="card">
                <img
                    :src="item.url"
                    class="card-img"
                    alt=""
                />
                <div class="card-body">
                    <div class="card-title">{{ item.title }}</div>
                    <div class="card-desc">{{ item.desc }}</div>
                </div>
            </div>
        </template>
    </MasonryWall>
</template>

<script setup lang="ts">
import { MasonryWall } from "@a-drowned-fish/rox-v";

interface PhotoItem {
    url: string;
    title: string;
    desc: string;
}

const items: PhotoItem[] = [
    { url: "https://picsum.photos/seed/rox1/300/200", title: "山间晨雾", desc: "清晨的山谷被薄雾笼罩" },
    { url: "https://picsum.photos/seed/rox2/300/420", title: "都市霓虹", desc: "夜幕下的城市灯火" },
    { url: "https://picsum.photos/seed/rox3/300/300", title: "海岸线", desc: "潮起潮落的海边" },
    { url: "https://picsum.photos/seed/rox4/300/520", title: "林间小径", desc: "阳光穿过树叶的缝隙" },
    { url: "https://picsum.photos/seed/rox5/300/240", title: "湖心倒影", desc: "平静湖面的对称之美" },
    { url: "https://picsum.photos/seed/rox6/300/380", title: "雪山之巅", desc: "高海拔的纯净世界" },
    { url: "https://picsum.photos/seed/rox7/300/260", title: "麦田黄昏", desc: "风吹麦浪的金色海洋" },
    { url: "https://picsum.photos/seed/rox8/300/460", title: "星空银河", desc: "无光害下的璀璨星河" },
    { url: "https://picsum.photos/seed/rox9/300/320", title: "老城巷弄", desc: "斑驳墙壁讲述旧时光" },
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
}
.card-title {
    font-size: 14px;
    font-weight: 600;
    color: #1f2329;
}
.card-desc {
    margin-top: 4px;
    font-size: 12px;
    color: #8a919f;
}
</style>
