<template>
  <section class="car__section" v-if="store.car">
    <div class="container">
      <div class="row">

        <div class="car-links">
          <router-link to="/home" class="car-links-item">home</router-link>
          <span class="link-dot"></span>
          <router-link to="/catalog" class="car-links-item">catalog</router-link>
          <span class="link-dot"></span>
          <router-link :to="`/catalog/${store.car.link}`" class="car-links-item">{{store.car.link}}</router-link>
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
                <h3 class="car__descr-title">description</h3>

                <p class="car__descr-txt">{{ store.car.descr }}</p>
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
  padding: 45px 0 0;

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
      font-size: calc(12px + 2 * (100vw / 1920));
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
    font-size: calc(20px + 12 * (100vw / 1920));
    font-weight: 400;
    text-transform: capitalize;
  }

  .car-flex-box {
    width: 100%;
    display: flex;
    column-gap: 10px;
    row-gap: 10px;

    .car-flex-column {
      max-width: max-content;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }

  .car-swiper {
    max-width: 780px;
    width: 100%;
    height: 500px;

    &-slide {
      width: 100%;
      height: 100%;
      border-radius: 30px;
      overflow: hidden;
    }

    &-img {
      width: 100%;
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
      font-size: calc(16px + 6 * (100vw / 1920));
      margin-bottom: 10px;
      font-weight: 500;
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
      font-size: calc(12px + 2 * (100vw / 1920));
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
    row-gap: 15px;
    background: var(--main-white);
    border-radius: 30px;
    padding: 30px;

    &-title {
      font-size: calc(20px + 4 * (100vw / 1920));
      font-weight: 500;
      text-transform: capitalize;
    }

    &-txt {
      font-size: calc(11px + 2 * (100vw / 1920));
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

@media (min-width: 1920px) {
  .car-model {
    font-size: 32px !important;
  }

  .car-links-item, .all-info {
    font-size: 14px !important;
  }

  .car__info-name {
    font-size: 22px !important;
  }

  .car__descr {
    &-title {
      font-size: 24px !important;
    }

    &-txt {
      font-size: 13px !important;
    }
  }
}

@media (max-width: 1190px) {
  .car-flex-box {
    flex-direction: column;

    .car-flex-column {
      flex-direction: row !important;

      .car__descr {
        max-width: 400px;
        padding: 25px !important;
      }
    }

    .car__info {
      padding: 30px !important;
    }
  }
}

@media (max-width: 992px) {
  .car-flex-box {
    align-items: center;

    .car-flex-column {
      flex-direction: column !important;
      align-items: center;

      .car__descr {
        max-width: 780px;
        padding: 20px !important;
        background: transparent;

        &-txt {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    }

    .car__info {
      max-width: 780px;
      padding: 20px !important;
    }
  }

  .car-swiper {
    height: 450px !important;
  }
}

@media (max-width: 576px) {
  .car-swiper {
    height: 350px !important;
  }

  .car-flex-box {
    .car-flex-column {
      .car__descr {
        padding: 10px !important;
      }
    }

    .car__info {
      padding: 20px 15px !important;
    }
  }
}

@media (max-width: 486px) {
  .car-swiper {
    height: 250px !important;
  }
}

</style>