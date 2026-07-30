<template>
    <Tab v-model="active" :items="items">
        <template #panel="{ item, index }">
            <div style="padding: 16px; border: 1px solid #eee; border-radius: 8px">
                面板内容 {{ index + 1 }}：{{ item.label }}
            </div>
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
