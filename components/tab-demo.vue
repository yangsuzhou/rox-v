<template>
    <Tab v-model="active" :items="items">
        <template #default="{ index, item, active }">
            <span class="tab-item" :class="{ active }">{{ item.label }}</span>
        </template>
        <template #panel="{ item, index }">
            <div style="padding: 16px; border: 1px solid #eee; border-radius: 8px">面板内容 {{ index + 1 }}：{{ item.label }}</div>
        </template>
    </Tab>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Tab } from "@a-drowned-fish/rox-v";

const active = ref(0);
const items = [
    { key: "1", label: "标签一" },
    { key: "2", label: "标签二" },
    { key: "3", label: "标签三" },
];
</script>
<style>
.tab-item {
    display: flex;
    height: 36px;
    padding: 10px 0;
    color: #1a171b;
    opacity: 0.32;
    align-items: center;
    transition: opacity 200ms linear;
}

.tab-item.active {
    opacity: 1;
}
</style>
