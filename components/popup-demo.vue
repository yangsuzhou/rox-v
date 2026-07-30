<template>
    <div style="display: flex; gap: 12px">
        <Button @click="openCenter = true">居中弹窗</Button>
        <Button @click="openBottom = true">底部弹窗</Button>
        <Popup v-model="openCenter" position="center">
            <div style="padding: 24px; background: #fff; border-radius: 8px; min-width: 200px">
                居中弹窗内容
                <div style="margin-top: 12px; text-align: right">
                    <Button @click="openCenter = false">关闭</Button>
                </div>
            </div>
        </Popup>
        <Popup v-model="openBottom" position="bottom">
            <div style="padding: 24px; background: #fff; border-radius: 12px 12px 0 0">
                底部弹窗内容
                <div style="margin-top: 12px; text-align: right">
                    <Button @click="openBottom = false">关闭</Button>
                </div>
            </div>
        </Popup>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Button, Popup } from "@a-drowned-fish/rox-v";

const openCenter = ref(false);
const openBottom = ref(false);
</script>
