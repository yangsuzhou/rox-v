<template>
    <div style="display: flex; flex-wrap: wrap; gap: 40px; align-items: center">
        <!-- 基础用法：悬停展开成 X -->
        <div style="text-align: center">
            <XIcon />
            <div style="margin-top: 8px; font-size: 12px; color: #888">悬停展开</div>
        </div>

        <!-- 自定义颜色 -->
        <div style="text-align: center">
            <XIcon color="#646cff" />
            <div style="margin-top: 8px; font-size: 12px; color: #888">color</div>
        </div>

        <!-- 自定义尺寸（number，单位 px） -->
        <div style="text-align: center">
            <XIcon :size="56" />
            <div style="margin-top: 8px; font-size: 12px; color: #888">size = 56</div>
        </div>

        <!-- 自定义线条粗细 -->
        <div style="text-align: center">
            <XIcon :stroke-width="3" :line-width="4" />
            <div style="margin-top: 8px; font-size: 12px; color: #888">strokeWidth / lineWidth</div>
        </div>

        <!-- 自定义动画时长（ms） -->
        <div style="text-align: center">
            <XIcon :duration="1200" color="#e5484d" />
            <div style="margin-top: 8px; font-size: 12px; color: #888">duration = 1200ms</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { XIcon } from "@a-drowned-fish/rox-v";
</script>
