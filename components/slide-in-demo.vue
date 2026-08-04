<template>
    <div>
        <div
            style="
                height: 50vh;
                background: #f0f0f0;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 20px;
            "
        >
            <p style="color: #999">向下滚动查看动画效果 ↓</p>
        </div>

        <div
            v-slide-in
            style="padding: 24px; margin-bottom: 12px; background: #646cff; color: #fff; border-radius: 8px"
        >
            滑入元素 1（默认参数：从下方 100px 滑入）
        </div>

        <div
            v-slide-in="{ y: 0, x: -100 }"
            style="padding: 24px; margin-bottom: 12px; background: #42b883; color: #fff; border-radius: 8px"
        >
            滑入元素 2（从左侧滑入）
        </div>

        <div
            v-slide-in="{ y: 0, x: 100 }"
            style="padding: 24px; margin-bottom: 12px; background: #ff7a45; color: #fff; border-radius: 8px"
        >
            滑入元素 3（从右侧滑入）
        </div>

        <div
            v-slide-in="{ y: -100, x: 0 }"
            style="padding: 24px; margin-bottom: 12px; background: #722ed1; color: #fff; border-radius: 8px"
        >
            滑入元素 4（从上方滑入）
        </div>

        <div
            v-slide-in.both="{ duration: 500, y: 100 }"
            style="padding: 24px; margin-bottom: 12px; background: #13c2c2; color: #fff; border-radius: 8px"
        >
            滑入元素 5（双向动画：进入视口正向播放，离开视口反向播放）
        </div>

        <div
            v-slide-in="{ duration: 800, delay: 500, y: 150, ease: 'ease-out' }"
            style="padding: 24px; margin-bottom: 12px; background: #eb2f96; color: #fff; border-radius: 8px"
        >
            滑入元素 6（自定义时长 800ms，延迟 500ms，缓动函数 ease-out）
        </div>

        <div
            v-slide-in="{ startOpacity: 0.3, y: 80 }"
            style="padding: 24px; margin-bottom: 12px; background: #fa8c16; color: #fff; border-radius: 8px"
        >
            滑入元素 7（起始透明度 0.3）
        </div>

        <div
            style="
                height: 50vh;
                background: #f0f0f0;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 20px;
            "
        >
            <p style="color: #999">↑ 向上滚动查看动画效果</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { slideInDirective } from "@a-drowned-fish/rox-v";

const vSlideIn = slideInDirective.directive;
</script>
