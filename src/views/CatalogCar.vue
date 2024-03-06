<template>
  <section class="car__section" v-if="store.car">
    <div class="container">
      <div class="row">

        <div class="car-links">
          <router-link to="/home" class="car-links-item">home</router-link>
          <span class="link-dot"></span>
          <router-link to="/catalog" class="car-links-item">catalog</router-link>
        </div>

        <h3 class="car-model">{{ store.car.model }}</h3>

        <div class="car-flex-box">
          <div class="car-flex-column">
            <swiper class="car-swiper" :modules="modules" :grabCursor="true" :spaceBetween="10" :navigation="true">
              <swiper-slide class="car-swiper-slide" v-for="img in store.car.sliderImgs" :key="img">
                <img :src="img" alt="" class="car-swiper-img">
              </swiper-slide>
            </swiper>

            <div class="car__descr">
              <div class="car__descr-info">
                <h3 class="car__descr-title">description</h3>

                <p class="car__descr-txt">{{ store.car.descr }}</p>
              </div>
            </div>
          </div>

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

            <button class="order-btn all-btn">order</button>
          </div>

          
        </div>

      </div>
    </div>
  </section>

  <section class="no-msg__section" v-else>
    <div class="container">
      <div class="row">
        <p class="no-msg">no information About Car</p>
      </div>
    </div>
  </section>

  <main class="main">
    <Deals/>

    <Categories :numberOfItem="2"/>
  </main>
</template>

<script>
import Deals from '@/components/Deals.vue'
import { carPageStore } from "@/stores/carPageStore.js";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';
import {A11y, Navigation } from 'swiper/modules';
import Categories from '@/components/Categories.vue';

export default {
  name: 'Catalog Car',
  components: {
    Deals,
    Swiper,
    SwiperSlide,
    Categories
  },
  data() {
    return {
      store: carPageStore(),
      modules: [Navigation, A11y],
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

  .car-links {
    max-width: max-content;
    display: flex;
    align-items: center;
    gap: 10px;
    
    &-item {
      font-size: 14px;
      font-weight: 300;
      text-transform: capitalize;
      transition: .4s;

      &:hover {
        color: var(--main-blue);
      }
    }

    .link-dot {
      width: 4px;
      height: 4px;
      background: var(--main-black);
      border-radius: 50%;
    }
  }

  .car-model {
    font-size: 32px;
    font-weight: 400;
    text-transform: capitalize;
  }

  .car-flex-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    .car-flex-column {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
    }
  }

  .car-swiper {
    max-width: 780px;
    width: 100%;

    &-slide {
      width: 100%;
      height: 100%;
      border-radius: 30px;
      overflow: hidden;
    }

    &-img {
      width: 100%;
      max-height: 500px;
      min-height: 500px;
      height: 100%;
      object-fit: cover;
    }
  }

  .car__info {
    max-width: 550px;
    width: 100%;
    height: max-content;
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

  .car__descr {
    max-width: 780px;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 25px;
    background: var(--main-white);
    border-radius: 30px;

    &-info {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 30px;
      row-gap: 15px;
    }

    &-title {
      font-size: 24px;
      font-weight: 500;
      text-transform: capitalize;
    }

    &-txt {
      font-size: 15px;
      font-weight: 300;
      letter-spacing: 1.2px;
      line-height: 150%;
    }
  }
}

.no-msg__section {
  width: 100%;
  padding-top: 40px;

  .no-msg {
    font-size: 18px;

    &::first-letter {
      text-transform: uppercase;
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