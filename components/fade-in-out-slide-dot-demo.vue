<template>
    <div style="padding: 16px; border: 1px solid #eee; border-radius: 8px">
        <FadeInOutSlideDot :items="items" :active="active" @change="active = $event" />
        <div style="margin-top: 12px">当前激活：{{ active }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FadeInOutSlideDot } from "@a-drowned-fish/rox-v";

const active = ref(0);
const items = [1, 2, 3];
</script>
