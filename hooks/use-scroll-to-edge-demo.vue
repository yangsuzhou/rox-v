<template>
    <div>
        <div
            ref="scrollContainerRef"
            style="display: flex; gap: 8px; overflow-x: auto; padding: 12px; background: #fafafa; border-radius: 8px"
        >
            <div
                v-for="n in 20"
                :key="n"
                :data-item="n"
                style="
                    flex: 0 0 auto;
                    width: 80px;
                    height: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #ff7a45;
                    color: #fff;
                    border-radius: 8px;
                "
            >
                {{ n }}
            </div>
        </div>
        <div style="margin-top: 12px">
            <Button @click="scroll('[data-item=\\'18\\']')">将第 18 项滚动到视口边缘</Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Button, useScrollToEdge } from "@a-drowned-fish/rox-v";

const { scrollContainerRef, scroll } = useScrollToEdge();
</script>
