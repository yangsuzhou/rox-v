<template>
    <div style="padding: 16px; border: 1px solid #eee; border-radius: 8px">
        <div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; width: 30vw; height: 20vh">
            <FadeInOut v-model="active" :items="items" :duration="1500" :delay="3000" style="height: 100%">
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
        <section style="background-color: rgba(0, 0, 0, 0.7); width: 30vw; display: flex; justify-content: center; align-items: center">
            <FadeInOutSlideDot
                :delay="1500"
                :duration="3000"
                :items="items"
                :active="active"
                :initial-animate="true"
                @change="(i) => (active = i)"
            >
            </FadeInOutSlideDot>
        </section>
        <div style="margin-top: 12px">当前激活：{{ active }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FadeInOut, FadeInOutSlideDot } from "@a-drowned-fish/rox-v";

const active = ref(0);
const items = ["#646cff", "#42b883", "#ff7a45"];
</script>
