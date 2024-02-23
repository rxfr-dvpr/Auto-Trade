<template>
  <header class="header">
    <div class="container">
        <div class="row">
            <h1 class="header-title">{{ store.title }}</h1>
            <h2 class="header-subtitle">{{ store.subtitle }}</h2>
        </div>
    </div>

    <div class="header-bg-box">
        <img src="@/assets/images/header/header-bg.png" alt="" class="header-bg">
    </div>
  </header>
</template>

<script>
import { headerStore } from "@/stores/headerStore.js";

export default {
    name: 'Header',
    data() {
        return {
            store: headerStore()
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