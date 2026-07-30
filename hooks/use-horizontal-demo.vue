<template>
    <div
        ref="scrollContainerRef"
        style="display: flex; gap: 8px; overflow-x: auto; padding: 12px; background: #fafafa; border-radius: 8px"
    >
        <div
            v-for="n in 20"
            :key="n"
            style="
                flex: 0 0 auto;
                width: 80px;
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #646cff;
                color: #fff;
                border-radius: 8px;
            "
        >
            {{ n }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { useHorizontal } from "@a-drowned-fish/rox-v";

const { scrollContainerRef } = useHorizontal({ step: 15 });
</script>
