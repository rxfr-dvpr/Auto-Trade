<template>
  <section class="deals__section">
    <div class="container">
        <div class="row">
            <h2 class="deals-title all-title">{{ title }}</h2>

            <div class="car__cards">
                <Car v-for="(car, idx) in store.cars" :car="car" :key="idx"/>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { carsStore } from "@/stores/carsStore.js";
import Car from './Car.vue';

export default {
    name: 'Deals Section',
    data() {
        return {
            store: carsStore(),
            title: 'hot deals'
        }
    },
    components: {
        Car
    }
}

</script>

<style lang="scss" scoped>

.deals__section {
    width: 100%;

    .row {
        flex-direction: column;
        align-items: center;
        row-gap: 35px;
    }

    .car__cards {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        column-gap: 12px;
        row-gap: 35px;
    }
}

</style>