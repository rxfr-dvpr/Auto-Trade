<template>
  <section class="car__section" v-if="store.car">
    <div class="container">
      <div class="row">

        <div class="car-links">
          <span class="car-links-item"></span>
        </div>

        <h3 class="car-model">{{ store.car.model }}</h3>

        <div class="car__info">
          <p class="car__info-name">{{ store.car.model }}</p>

          <p class="car__info-drive all-info">Drive: <span>{{ store.car.drivetrain }}</span></p>

          <p class="car__info-engine all-info">Engine displacement: <span>{{ store.car.engine }}00 cm3</span></p>

          <p class="car__info-engine-type all-info">Engine type: <span>{{ store.car.engineType }}</span></p>

          <p class="car__info-consuption all-info">Fuel consumption per 100 km: <span>{{ store.car.consuption }} L</span></p>

          <p class="car__info-acceleration all-info">Acceleration to 100 km/h: <span>{{ store.car.acceleration }} sec</span></p>

          <p class="car__info-power all-info">Engine power: <span>{{ store.car.power }} hp</span></p>

          <p class="car__info-gears all-info">Number of gears: <span>{{ store.car.gears }}</span></p>

          <p class="car__info-trunk all-info">Trunk capacity max: <span>{{ store.car.trunk }} L</span></p>

          <p class="car__info-gearbox all-info">Type of gearbox: <span>{{ store.car.gearbox }}</span></p>

          <p class="car__info-body all-info">Body type: <span>{{ store.car.body }}</span></p>
        </div>
      </div>
    </div>
  </section>

  <p class="no-msg" v-else>no information</p>

  <main class="main">
    <Deals/>
  </main>
</template>

<script>
import Deals from '@/components/Deals.vue'
import { carPageStore } from "@/stores/carPageStore.js";

export default {
  name: 'Catalog Car',
  components: {
    Deals
  },
  data() {
    return {
      store: carPageStore()
    }
  }
}

</script>

<style lang="scss" scoped>

.car__section {
  width: 100%;
  padding: 45px 0 80px;

  .row {
    flex-direction: column;
    row-gap: 45px;
  }

  .car-model {
    font-size: 32px;
    font-weight: 400;
    text-transform: capitalize;
  }

  .car__info {
    max-width: 550px;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 25px;
    background: var(--main-white);
    padding: 40px;
    border-radius: 30px;

    &-name {
      margin-bottom: 10px;
    }

    &-drive, &-body, &-gearbox {
      span {
        text-transform: uppercase !important;
      }
    }

    &-acceleration, &-power, &-engine {
      span {
        text-transform: lowercase !important;
      }
    }

    .all-info {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      font-weight: 300;

      span {
        font-weight: 500;
        text-transform: capitalize;
      }
    }
  }
}

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 90px 0;
  row-gap: 120px;
}

</style>