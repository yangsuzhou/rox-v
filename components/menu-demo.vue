<template>
    <Menu v-model="selected" :items="items" list-container-class="list-box" default-container-class="placeholder-box">
        <span>select</span>
    </Menu>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Menu } from "@a-drowned-fish/rox-v";

const selected = ref<string[]>([]);
const items = [
    { key: "1", label: "首页", value: "1" },
    {
        key: "2",
        label: "设置",
        value: "2",
        children: [
            { key: "2-1", label: "通用", value: "2-1" },
            { key: "2-2", label: "隐私", value: "2-2" },
        ],
    },
    { key: "3", label: "禁用项", value: "3" },
];
</script>
<style>
:deep(.placeholder-box) {
    width: 320px;
    height: 40px;
    justify-content: space-between;
    cursor: pointer;
}
:deep(.menu-list-box) {
    width: 300px;
    /* min-height: 340px; */
}
.list-box {
    width: 300px;
    /* min-height: 340px; */
}
</style>
