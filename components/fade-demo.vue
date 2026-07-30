<template>
    <div>
        <div
            v-fade
            style="padding: 24px; margin-bottom: 12px; background: #646cff; color: #fff; border-radius: 8px"
        >
            淡入元素 1（默认参数）
        </div>
        <div
            v-fade="{ duration: 800, distance: 60 }"
            style="padding: 24px; margin-bottom: 12px; background: #42b883; color: #fff; border-radius: 8px"
        >
            淡入元素 2（自定义时长与位移）
        </div>
    </div>
</template>

<script setup lang="ts">
import { fadeDirective } from "@a-drowned-fish/rox-v";

const vFade = fadeDirective.directive;
</script>
