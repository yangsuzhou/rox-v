<template>
    <div style="width: 240px">
        <SingleSelect :items="items" @change="onChange">
            <template #default>
                <div class="ss-trigger">
                    <span>{{ selectedLabel || "请选择" }}</span>
                    <span class="ss-arrow">▾</span>
                </div>
            </template>
            <template #option="{ item }">
                <span>{{ item.label }}</span>
            </template>
        </SingleSelect>
        <div class="ss-tip">当前选中：{{ selectedLabel || "未选择" }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { SingleSelect } from "@a-drowned-fish/rox-v";

interface Option {
    label: string;
    value: string | number;
}

const items: Option[] = [
    { label: "选项一", value: "1" },
    { label: "选项二", value: "2" },
    { label: "选项三", value: "3" },
    { label: "选项四", value: "4" },
];

const selectedLabel = ref("");

function onChange(item: Option) {
    selectedLabel.value = item.label;
}
</script>

<style scoped>
.ss-trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
}
.ss-arrow {
    font-size: 12px;
    color: var(--vp-c-text-2);
}
.ss-tip {
    margin-top: 12px;
    color: var(--vp-c-text-2);
    font-size: 14px;
}
</style>
