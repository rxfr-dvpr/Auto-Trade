<template>
  <div class="nav-top" :class="{'second-mode': this.$route.name !== 'home'}" v-if="wSize > 786">
    <div class="container">
        <div class="row">
            <div class="nav-top-left">
                <select class="lang-selection all-select" id="">
                    <option :value="option.name"
                     v-for="option in store.langs" :key="option" 
                     :selected="option.selected">
                        {{ option.name }}
                    </option>
                </select>

                <select class="currency-selection all-select" id="">
                    <option :value="option.name"
                     v-for="option in store.curs" :key="option" 
                     :selected="option.selected">
                        {{ option.name }}
                    </option>
                </select>
            </div>

            <div class="nav-top-right">
                <a href="tel:+998998173066" class="nav-num">+998 99 817 30 66</a>

                <button class="callback-btn">request a callback</button>

                <div class="nav-socials">
                    <a href="https://t.me/redfox4ever" target="_blank" class="nav-socials-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/NavTop%2Ftelegram.svg?alt=media&token=bcca0982-f853-4aad-b59e-bf796ebb3275" alt="" class="nav-socials-icon">
                    </a>

                    <a href="https://www.instagram.com/rxfr_dvpr" target="_blank" class="nav-socials-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/NavTop%2Finstagram.svg?alt=media&token=f0f37f58-8e99-463b-ab74-05cbcae233cf" alt="" class="nav-socials-icon">
                    </a>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { navTopStore } from "@/stores/navTopStore.js";

export default {
    name: 'Nav Top',
    data() {
        return {
            store: navTopStore(),
            wSize: window.innerWidth
        }
    },
    mounted() {
        window.addEventListener('resize', () => {
            this.wSize = window.innerWidth
        })
    }
}

</script>

<style lang="scss" scoped>

.nav-top {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2024;

    .row {
        justify-content: space-between;
        align-items: center;
    }

    .all-select {
        background: transparent;
        border: none;
        color: var(--main-white);
        text-transform: capitalize;
        padding: 5px 10px;
        cursor: pointer;
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;

        option {
            color: var(--main-white);
            background: var(--main-black);
            cursor: pointer;
            padding: 5px 10px;
            font-weight: 500;
            font-size: 14px;
        }

        &.currency-selection {
            text-transform: uppercase;
        }
    }

    &-left {
        display: flex;
        gap: 25px;
        align-items: center;
    }

    &-right {
        display: flex;
        gap: 20px;
        align-items: center;

        .nav-num {
            font-size: 14px;
            color: var(--main-white);
            transition: .3s;

            &:hover {
                color: var(--main-blue) !important;
            }
        }

        .callback-btn {
            max-width: max-content;
            width: 100%;
            background: var(--main-black);
            color: var(--main-white);
            padding: 15px 35px;
            transition: .3s;
            border: 0;

            &::first-letter {
                text-transform: uppercase;
            }

            &:hover {
                background: var(--main-blue);
            }
        }

        .nav-socials {
            display: flex;
            gap: 20px;
            align-items: center;

            &-item {
                max-width: 25px;
                width: 100%;
            }

            &-icon {
                width: 100%;
            }
        }
    }

    &.second-mode {
        position: static;
        background: var(--bg-color);

        .all-select {
            color: var(--main-black);
        }

        .nav-num {
            color: var(--main-black);
        }
    }
}

</style>