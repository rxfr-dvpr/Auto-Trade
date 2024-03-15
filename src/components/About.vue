<template>
  <section class="about__section">
    <div class="container">
        <div class="row">

            <div class="about__cards">
                <div class="about__cards-item" v-for="(card, idx) in store.cards" :key="idx">
                    <h3 class="card-name">{{ card.name }}</h3>

                    <p class="card-descr">{{ card.txt }}</p>
                </div>
            </div>

            <img :src="store.img" alt="" class="about-bg-img">
        </div>
    </div>
  </section>
</template>

<script>
import { aboutStore } from "@/stores/aboutStore.js";

export default {
    name: 'About Section',
    data() {
        return {
            store: aboutStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.about__section {
    width: 100%;

    .row {
        flex-direction: column;
        position: relative;
        padding-top: 350px;
    }

    .about__cards {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 15px;
        padding: 0 25px 25px;

        &-item {
            padding: 30px 15px;
            backdrop-filter: blur(50px);
            border-radius: 10px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            row-gap: 50px;
            align-items: center;
            text-align: center;

            .card-name {
                font-size: calc(16px + 4 * (100vw / 1920));
                color: var(--main-white);
                text-transform: uppercase;
                font-weight: 500;
                word-break: break-all;
            }

            .card-descr {
                font-size: calc(12px + 2 * (100vw / 1920));
                color: var(--main-white);
                margin-top: auto;

                &::first-letter {
                    text-transform: uppercase;
                }
            }
        }
    }

    .about-bg-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
        border-radius: 30px;
    }
}

@media (min-width: 1920px) {
    .card-name {
        font-size: 20px !important;
    }

    .card-descr {
        font-size: 14px !important;
    }
}

@media (max-width: 1170px) {
    .about__cards {
        display: flex !important;
        flex-wrap: wrap;
        justify-content: center;

        &-item {
            max-width: 315px;
        }
    }
}

@media (max-width: 1024px) {
    .about__section {
        .row {
            padding-top: 250px;
        }
    }

    .about__cards {
        padding: 0 20px 20px !important;
        
        &-item {
            max-width: 405px;
        }
    }
}

</style>