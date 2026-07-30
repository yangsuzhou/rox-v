<template>
    <SliderCaptcha
        background="https://picsum.photos/seed/rox/300/150"
        block="https://picsum.photos/seed/block/40/40"
        :verify="verify"
        @success="onSuccess"
        @fail="onFail"
    />
</template>

<script setup lang="ts">
import { SliderCaptcha, type RoxVSliderCaptchaTrackItem } from "@a-drowned-fish/rox-v";

function verify(_option: RoxVSliderCaptchaTrackItem) {
    // 真实场景应请求后端校验，这里直接通过
    return true;
}
function onSuccess() {
    console.log("验证成功");
}
function onFail() {
    console.log("验证失败");
}
</script>
