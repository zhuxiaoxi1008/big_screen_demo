<template>
    <div class="screen-container">
        <div class="screen-content" ref="screenRef">
            <div v-if="loading" class="mask flex justify-center align-center">
                <dv-loading>
                    <span class="loading-title">加载中...</span>
                </dv-loading>
            </div>
            <div class="h-full flex flex-col">
                <ScreenHeader></ScreenHeader>
                <ScreenMain></ScreenMain>
                <ScreenFooter></ScreenFooter>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import windowResize from '@/utils/resize';
import { onMounted, onUnmounted, ref } from 'vue';
import ScreenMain from './ScreenMain.vue';
import ScreenFooter from './ScreenFooter.vue';
import ScreenHeader from './ScreenHeader.vue';

const { screenRef, calcRate, windowDraw, unWindowDraw } = windowResize()
const loading = ref(true);

onMounted(() => {
    // 监听浏览器窗口尺寸变化
    windowDraw()
    calcRate()
    setTimeout(() => {
        loading.value = false;
    }, 2000);
})

onUnmounted(() => {
    unWindowDraw();
})

// getScreenData().then(res => {
//     console.log(res)
// })


</script>

<style lang="scss" scoped>
.screen-container {
    width: 100vw;
    height: 100vh;
    background-color: $theme-color;
    display: flex;
    justify-content: center;
    align-items: center;


    .mask {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: $theme-color;
        z-index: 9999;
        background-image: url('@/assets/imgs/home_bg.png');
    }

    .screen-content {
        width: 1920px;
        height: 1080px;
        box-sizing: border-box;
        padding: 12px;
        background-image: url('@/assets/imgs/home_bg.png');
        transition: all .2s ease-in-out;

        display: flex;
        flex-direction: column;

        .loading-title {
            font-size: $base-font-size;
            color: #fff;
            margin-top: 10px;
        }


    }

    .main-section {
        height: 0;
        flex: 1;
        display: flex;
        flex-direction: column;
    }
}
</style>