<template>
    <div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden">
        <FrameSlide v-model="index" :items="items">
            <template #default="{ item, index }">
                <div
                    style="height: 160px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px"
                    :style="{ background: item }"
                >
                    帧 {{ index + 1 }}
                </div>
            </template>
        </FrameSlide>
        <div style="padding: 8px; text-align: center">当前帧：{{ index }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FrameSlide } from "@a-drowned-fish/rox-v";

const index = ref(0);
const items = ["#646cff", "#42b883", "#ff7a45", "#ffc107", "#000", "#f00", "#0f0", "#00f", "#ccc", "#eee", "orange", "yellow"];
</script>
