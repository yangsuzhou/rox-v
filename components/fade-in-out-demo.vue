<template>
    <div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden">
        <FadeInOut v-model="index" :items="items" :duration="1500" :delay="3000">
            <template #default="{ item, index }">
                <div
                    style="height: 180px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px"
                    :style="{ background: item }"
                >
                    幻灯片 {{ index + 1 }}
                </div>
            </template>
        </FadeInOut>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FadeInOut } from "@a-drowned-fish/rox-v";

const index = ref(0);
const items = ["#646cff", "#42b883", "#ff7a45"];
</script>
