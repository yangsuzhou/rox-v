<template>
    <div
        ref="box"
        style="padding: 24px; background: #646cff; color: #fff; border-radius: 8px; transition: opacity 0.3s"
        :style="{ opacity: visible ? 1 : 0.3 }"
    >
        是否在视口内：{{ visible ? "是" : "否" }}
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useIntersectionObserver } from "@a-drowned-fish/rox-v";

const box = ref<HTMLElement | null>(null);
const visible = ref(false);

useIntersectionObserver(
    box,
    ([entry]) => {
        visible.value = !!entry?.isIntersecting;
    },
    { threshold: 0.5 },
);
</script>
