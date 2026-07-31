<template>
    <div style="display: flex; gap: 12px; flex-wrap: wrap">
        <Button @click="info('这是一条普通提示')">默认</Button>
        <Button @click="success('操作成功')">成功</Button>
        <Button @click="error('操作失败')">错误</Button>
        <Button @click="warning('请注意')">警告</Button>
        <Toaster />
    </div>
</template>

<script setup lang="ts">
import { Button, Toaster, useToast } from "@a-drowned-fish/rox-v";

const { success, error, warning, info } = useToast();
</script>
