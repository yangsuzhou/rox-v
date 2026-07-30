<template>
    <div style="display: flex; flex-wrap: wrap; gap: 12px">
        <img
            v-lazy="'https://picsum.photos/seed/rox1/200/200'"
            style="width: 120px; height: 120px; object-fit: cover; background: #eee; border-radius: 8px"
        />
        <img
            v-lazy="'https://picsum.photos/seed/rox2/200/200'"
            style="width: 120px; height: 120px; object-fit: cover; background: #eee; border-radius: 8px"
        />
        <img
            v-lazy="'https://picsum.photos/seed/rox3/200/200'"
            style="width: 120px; height: 120px; object-fit: cover; background: #eee; border-radius: 8px"
        />
    </div>
</template>

<script setup lang="ts">
import { lazyDirective } from "@a-drowned-fish/rox-v";

const vLazy = lazyDirective.directive;
</script>
