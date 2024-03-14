<template>
  <section class="buy__section" id="service">
    <div class="container">
        <div class="row">
            <h2 class="buy-title all-title">{{ store.title }}</h2>

            <div class="buy__steps">
                <div class="buy__steps-item" v-for="(step, idx) in store.steps" :key="idx"
                :class="`step-${idx + 1}`">
                    <span class="step-num">{{ idx + 1 }}</span>

                    <p class="step-name">{{ step.name }}</p>

                    <p class="step-txt">{{ step.txt }}</p>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { buyStore } from "@/stores/buyStore.js";

export default {
    name: 'How to Buy',
    data() {
        return {
            store: buyStore()
        }
    }
}
 
</script>

<style lang="scss" scoped>

.buy__section {
    width: 100%;

    .row {
        flex-direction: column;
        align-items: center;
        row-gap: 25px;
    }

    .buy-title {
        max-width: 700px;
        width: 100%;
        text-align: center;
    }

    .buy__steps {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-column-gap: 13px;
        grid-row-gap: 18px;

        &-item {
            display: flex;
            flex-direction: column;
            row-gap: 8px;
            padding: 20px 8px 20px 20px;
            border: solid 2px var(--main-gray);
            border-radius: 10px;

            .step-num {
                margin-bottom: 32px;
                font-size: 32px;
                font-weight: 600;
            }

            .step-name {
                font-size: calc(18px + 6 * (100vw / 1920));
                text-transform: uppercase;
                font-weight: 700;
            }

            .step-txt {
                max-width: 400px;
                width: 100%;
                font-size: calc(12px + 5 * (100vw / 1920));

                &::first-letter {
                    text-transform: uppercase;
                }
            }

            &.step-1 { grid-area: 1 / 1 / 3 / 3; }
            &.step-2 { grid-area: 1 / 3 / 3 / 7; }
            &.step-3 { grid-area: 1 / 7 / 3 / 9; }
            &.step-4 { grid-area: 3 / 1 / 5 / 4; }
            &.step-5 { grid-area: 3 / 4 / 5 / 9; }
        }
    }
}

@media (max-width: 992px) {
    .buy__steps {
        grid-template-columns: repeat(4, 1fr) !important;
        grid-template-rows: repeat(6, 1fr) !important;

        &-item {
            &.step-1 { grid-area: 1 / 1 / 3 / 3 !important; }
            &.step-2 { grid-area: 1 / 3 / 3 / 5 !important; }
            &.step-3 { grid-area: 3 / 1 / 5 / 3 !important; }
            &.step-4 { grid-area: 3 / 3 / 5 / 5 !important; }
            &.step-5 { grid-area: 5 / 1 / 7 / 5 !important; }
        }
    }
}

@media (max-width: 556px) {
    .buy__steps {
        display: flex !important;
        flex-direction: column;

        &-item {
            padding: 15px !important;
        }
    }
}

</style>