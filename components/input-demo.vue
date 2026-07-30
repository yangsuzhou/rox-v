<template>
    <div style="display: flex; flex-direction: column; gap: 12px; max-width: 320px">
        <Input v-model="value" placeholder="请输入内容" clearable />
        <Input v-model="pwd" type="password" placeholder="密码" password-toggle />
        <div>普通输入值：{{ value }}</div>
        <div>密码：{{ pwd }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Input } from "@a-drowned-fish/rox-v";

const value = ref("");
const pwd = ref("");
</script>
