<template>
  <header class="header" :class="{'catalog-header': this.$route.name == 'catalog'}">
    <div class="container">
        <div class="row">
            <h1 class="header-title">{{ this.$route.name == 'catalog' ? catalogTitle : store.title }}</h1>
            <h2 class="header-subtitle">{{ this.$route.name == 'catalog' ? catalogSubtitle : store.subtitle }}</h2>
        </div>
    </div>

    <div class="header-bg-box">
        <img :src="store.img" alt="" class="header-bg">
    </div>

    <button class="header-btn" @click="this.$router.push('/catalog')">
        {{ store.btn.txt }}
        <img :src="store.btn.vector" alt="" class="header-btn-vector">
    </button>
  </header>
</template>

<script>
import { headerStore } from "@/stores/headerStore.js";

export default {
    name: 'Header',
    data() {
        return {
            store: headerStore(),
            catalogTitle: 'explore exclusive cars',
            catalogSubtitle: 'in our catalog'
        }
    }
}

</script>

<style lang="scss" scoped>

.header {
    width: 100%;
    padding: 300px 0 370px;
    position: relative;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    overflow: hidden;

    &-bg-box {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;

        .header-bg {
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -2;
        }

        &::after {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: rgba($color: #100A00, $alpha: .5);
        }
    }

    .row {
        flex-direction: column;
        row-gap: 5px;
    }

    &-title, &-subtitle {
        color: var(--main-white);
        text-transform: uppercase;
        font-weight: 500;
    }

    &-title {
        font-size: calc(40px + 10 * (100vw / 1920));
        letter-spacing: 1.5px;
    }

    &-subtitle {
        font-size: calc(25px + 10 * (100vw / 1920));
    }

    .header-btn {
        max-width: 360px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background: transparent;
        border: 0;
        padding: 15px 0 5px;
        font-size: 18px;
        text-transform: uppercase;
        font-weight: 800;

        &-vector {
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
        }
    }

    &.catalog-header {
        border-radius: 0 !important;
        padding: 230px 0;

        .header-btn {
            display: none;
        }
    }
}

@media (min-width: 1920px) {
    .header {
        &-title {
            font-size: 50px !important;
        }

        &-subtitle {
            font-size: 35px !important;
        }
    }
}

</style>