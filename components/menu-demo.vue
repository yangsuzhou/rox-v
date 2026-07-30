<template>
    <div style="width: 220px; border: 1px solid #eee; border-radius: 8px; overflow: hidden">
        <Menu v-model="selected" :items="items" @menu-item-click="onClick" />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Menu } from "@a-drowned-fish/rox-v";

const selected = ref<string[]>(["1"]);
const items = [
    { key: "1", label: "首页" },
    {
        key: "2",
        label: "设置",
        children: [
            { key: "2-1", label: "通用" },
            { key: "2-2", label: "隐私" },
        ],
    },
    { key: "3", label: "禁用项", disabled: true },
];
function onClick(item: unknown) {
    console.log("click", item);
}
</script>
