<template>
    <div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden">
        <Panel v-model="active" :items="items">
            <template #default="{ item, index, active }">
                <div style="height: 140px; padding: 24px; background: #fafafa">
                    面板 {{ index + 1 }}：{{ item.label }} {{ active ? "(激活)" : "" }}
                </div>
            </template>
        </Panel>
        <div style="padding: 12px">
            <Button @click="active = (active + 1) % items.length">下一个</Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Button, Panel } from "@a-drowned-fish/rox-v";

const active = ref(0);
const items = [
    { key: "1", label: "面板一" },
    { key: "2", label: "面板二" },
    { key: "3", label: "面板三" },
];
</script>
