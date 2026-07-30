<template>
    <div style="padding: 16px; background: #fafafa; border-radius: 8px">
        页面可见性：<b>{{ isVisible ? "visible（可见）" : "hidden（隐藏）" }}</b>
        <div style="margin-top: 8px; font-size: 13px; color: #888">切换到其他标签页再切回来即可看到变化</div>
    </div>
</template>

<script setup lang="ts">
import { useDocumentVisibility } from "@a-drowned-fish/rox-v";

const isVisible = useDocumentVisibility();
</script>
