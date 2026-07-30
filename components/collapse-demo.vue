<template>
    <div style="width: 320px">
        <Button @click="open = !open">{{ open ? "收起" : "展开" }}</Button>
        <Collapse :open="open">
            <div style="padding: 16px; background: #fafafa; margin-top: 8px; border-radius: 6px">
                这是可折叠的内容区域，支持平滑展开 / 收起动画。
            </div>
        </Collapse>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Button, Collapse } from "@a-drowned-fish/rox-v";

const open = ref(false);
</script>
