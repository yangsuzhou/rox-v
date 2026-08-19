<template>
    <div style="display: flex; flex-wrap: wrap; gap: 40px; align-items: flex-start">
        <!-- 基础用法：监听整页滚动（省略 target，默认 document） -->
        <div style="text-align: center">
            <ToTopIcon />
            <div style="margin-top: 8px; font-size: 12px; color: #888">
                整页滚动，超过 {{ start }}px 出现
            </div>
        </div>

        <!-- 自定义位置、尺寸、背景 -->
        <div style="text-align: center">
            <ToTopIcon :boundary-start="120" :right="24" :bottom="24" :size="48" bg="#646cff" />
            <div style="margin-top: 8px; font-size: 12px; color: #888">
                right/bottom 24、size 48、自定义背景
            </div>
        </div>

        <!-- 使用默认插槽自定义内容 -->
        <div style="text-align: center">
            <ToTopIcon :boundary-start="200" bg="#e5484d">
                <span style="font-size: 12px; font-weight: 600">TOP</span>
            </ToTopIcon>
            <div style="margin-top: 8px; font-size: 12px; color: #888">
                默认插槽自定义文案
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ToTopIcon } from "@a-drowned-fish/rox-v";

const start = 300;
</script>
