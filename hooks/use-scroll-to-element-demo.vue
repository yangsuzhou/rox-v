<template>
    <div>
        <div
            ref="scrollContainerRef"
            style="height: 140px; overflow: auto; padding: 12px; background: #fafafa; border-radius: 8px"
        >
            <div v-for="n in 30" :key="n" style="padding: 6px">列表项 {{ n }}</div>
        </div>
        <div style="margin-top: 12px">
            <Button @click="scroll(19, { behavior: 'smooth' })">滚动到第 20 项</Button>
            <Button @click="scroll('latest')">滚动到最后一项</Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Button, useScrollToElement } from "@a-drowned-fish/rox-v";

const { scrollContainerRef, scroll } = useScrollToElement();
</script>
