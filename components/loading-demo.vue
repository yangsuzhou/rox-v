<template>
    <div
        style="
            position: relative;
            height: 140px;
            border: 1px solid #eee;
            border-radius: 8px;
            overflow: hidden;
        "
    >
        <Loading :visible="true" />
    </div>
</template>

<script setup lang="ts">
import { Loading } from "@a-drowned-fish/rox-v";
</script>
