<script setup lang="ts"></script>

<template>
  <div class="app-container">
    <RouterView></RouterView>
  </div>
</template>

<style lang="scss" scoped>

.app-container {
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
