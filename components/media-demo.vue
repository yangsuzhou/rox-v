<template>
    <div style="max-width: 360px; border: 1px solid #eee; border-radius: 8px; overflow: hidden">
        <Media
            type="video"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            :lazy="true"
            :pause-when-out-viewport="true"
            style="width: 100%; height: 200px; display: block"
        />
    </div>
</template>

<script setup lang="ts">
import { Media } from "@a-drowned-fish/rox-v";
</script>
