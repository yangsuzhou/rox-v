<template>
    <DropMenu>
        <Button>下拉菜单</Button>
        <template #list>
            <div style="padding: 8px 16px; background: #fff; border: 1px solid #eee">菜单项一</div>
            <div style="padding: 8px 16px; background: #fff; border: 1px solid #eee">菜单项二</div>
            <div style="padding: 8px 16px; background: #fff; border: 1px solid #eee">菜单项三</div>
        </template>
    </DropMenu>
</template>

<script setup lang="ts">
import { Button, DropMenu } from "@a-drowned-fish/rox-v";
</script>
