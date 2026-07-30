<template>
    <div class="gradient-demo" style="height: 220px; overflow: auto; border: 1px solid #eee">
        <GradientArea bg="#646cff" :start-boundary="0" :end-boundary="200" selector=".gradient-demo">
            <div style="padding: 8px 12px; height: 200px; color: #fff">顶部区域（向下滚动会逐渐变透明）</div>
        </GradientArea>
        <div style="height: 800px"></div>
    </div>
</template>

<script setup lang="ts">
import { GradientArea } from "@a-drowned-fish/rox-v";
</script>
