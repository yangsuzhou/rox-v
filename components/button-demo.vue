<template>
    <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
        <Button @click="onClick">点击我</Button>
        <Button :block="false" disabled>禁用</Button>
        <Button bg="#646cff" border="none" radius="999px" padding="8px 20px">自定义样式</Button>
    </div>
</template>

<script setup lang="ts">
import { Button } from "@a-drowned-fish/rox-v";

function onClick() {
    console.log("button clicked");
}
</script>
