<template>
  <section class="deals__section">
    <div class="container">
        <div class="row">
            <div class="car-card" v-for="(car, idx) in store.cars" :key="idx">
                <div class="car-card-top">
                    <p class="car-model">
                        {{ car.model }}
                        <span class="car-model-year">{{ car.year }}</span>
                    </p>

                    <span :class="`car-status ${car.new ? 'new-car': 'used-car'}`">
                        {{ car.new ? 'new' : 'used' }}
                    </span>
                </div>

                <div class="car-img-box">
                    <span class="car-bg-name">{{ car.bgTxt }}</span>
                    <img :src="car.img" alt="" class="car-img">
                </div>

                <div class="car-descr">
                    <span class="car-engine descr-txt">{{ car.engine }} L</span>
                    <span class="car-drivetrain descr-txt">{{ car.drivetrain }}</span>
                    <span class="car-body descr-txt">{{ car.body }}</span>
                </div>

                <button class="car-card-btn">{{ car.price }} {{ car.currency }}</button>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { carsStore } from "@/stores/carsStore.js";

export default {
    name: 'Deals Section',
    data() {
        return {
            store: carsStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.deals__section {
    width: 100%;

    .row {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 12px;
        row-gap: 35px;
    }

    .car-card {
        width: 100%;
        border: solid 2px #D9D9D9;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        justify-content: space-between;

        .car-descr {
            width: 100%;
            display: flex;
            gap: 20px;
            align-items: center;

            .descr-txt {
                font-size: 10px;
                color: var(--main-black);
                text-transform: uppercase;
                font-weight: 500;
            }
        }
    }
}

</style>