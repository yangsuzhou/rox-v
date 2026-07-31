<template>
    <div style="display: flex; flex-direction: column; gap: 12px">
        <InputOtp v-model="code" :length="6" @complete="onComplete" :auto-focus="true" />
        <div>已输入：{{ code }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { InputOtp } from "@a-drowned-fish/rox-v";

const code = ref("");
function onComplete(v: string) {
    console.log("complete", v);
}
</script>
