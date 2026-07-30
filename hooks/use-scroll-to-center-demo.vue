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
                    background: #42b883;
                    color: #fff;
                    border-radius: 8px;
                "
            >
                {{ n }}
            </div>
        </div>
        <div style="margin-top: 12px">
            <Button @click="scrollTo10">将第 10 项滚动到中心</Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Button, useScrollToCenter } from "@a-drowned-fish/rox-v";

const { scrollContainerRef, scroll } = useScrollToCenter();
const scrollTo10 = () => scroll("[data-item='10']");
</script>
