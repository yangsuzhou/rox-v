<template>
    <div style="display: flex; align-items: center; gap: 12px">
        <CountDown v-model="remain">
            <template #initial>已结束</template>
            <template #default="{ seconds }">剩余 {{ seconds }} 秒</template>
        </CountDown>
        <Button @click="remain = 10000">重新计时</Button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Button, CountDown } from "@a-drowned-fish/rox-v";

const remain = ref(0);
onMounted(() => {
    remain.value = 10000;
});
</script>
