<template>
    <div style="width: 240px">
        <Select v-model="value" :items="items" placeholder="请选择">
            <template #default="{ selected }">
                <span>{{ selected?.[0]?.label ?? "请选择" }}</span>
            </template>
        </Select>
        <div style="margin-top: 8px">已选值：{{ value }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Select } from "@a-drowned-fish/rox-v";

const value = ref<(string | number)[]>([]);
const items = [
    { label: "选项一", value: "1" },
    { label: "选项二", value: "2" },
    { label: "选项三", value: "3", disabled: true },
];
</script>
