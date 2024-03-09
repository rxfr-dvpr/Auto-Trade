<template>
  <Header/>
  
  <main class="main">
    <aside class="filter-aside">

      <div class="deals-filter all-filter">
        <span class="all-filter-title">deals</span>

        <label class="deals-filter-btn" for="deals">All deals <input type="checkbox" id="deals"></label>
      </div>

      <div class="body-filter all-filter">
        <span class="all-filter-title">body type</span>

        <div class="body-filter-flexbox">
          <span class="body-filter-btn all-filter-btn" v-for="(body, idx) in store.filter.bodyTypes" 
          :key="idx" :class="{'active': body.active}" @click="bTypeActive(idx)">
            <img :src="body.img" alt="" class="body-img">
            <p class="body-name">{{ body.name }}</p>
          </span>
        </div>
      </div>

    </aside>

    <section class="cars-list__section">
      <div class="container">
        <div class="row">
          <Car v-for="(car, idx) in store.cars" :car="car" :key="idx"/>
        </div>
      </div>
    </section>

  </main>
</template>

<script>
import Header from '@/components/Header.vue'
import Car from '@/components/Car.vue'
import { catalogStore } from "@/stores/catalogStore.js";

export default {
  name: 'Catalog Page',
  components: {
    Header,
    Car
  },
  data() {
    return {
      store: catalogStore()
    }
  },
  methods: {
    bTypeActive(idx) {
      this.store.filter.bodyTypes.map(body => body.active = false);
      this.store.filter.bodyTypes[idx].active = true;
    }
  }
}

</script>

<style lang="scss" scoped>

.main {
  max-width: 1730px;
  width: 100%;
  position: relative;
  padding: 95px 0 45px;
  display: flex;
  gap: 35px;
  margin: 0 auto;
}

.filter-aside {
  max-width: 315px;
  width: 100%;
  height: 80dvh;
  background: var(--main-white);
  padding: 20px 15px;
  position: sticky;
  top: 100px;
  left: 0;
  display: flex;
  flex-direction: column;
  row-gap: 25px;

  .all-filter {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    padding-bottom: 25px;
    border-bottom: 1px solid #D9D9D9;

    &-title {
      font-size: 15px;
      font-weight: 500;

      &::first-letter {
        text-transform: uppercase;
      }
    }
  }

  .body-filter {
    &-flexbox {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }

    &-btn {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      text-align: center;
      border: solid 1px #989898;
      border-radius: 4px;
      row-gap: 5px;
      padding: 5px 0;
      cursor: pointer;
      transition: .4s;
      

      .body-img {
        width: 100%;
        filter: grayscale(100%);
        transition: .4s;
      }

      .body-name {
        font-size: 8px;
        font-weight: 500;
        color: #4f4f4f;
        text-transform: uppercase;
        transition: .4s;
      }

      &:hover, &:active, &.active {
        border-color: var(--main-blue);

        .body-img {
          filter: grayscale(0%);
        }

        .body-name {
          color: var(--main-blue);
        }
      }
    }
  }

  .deals-filter {
    &-btn {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      cursor: pointer;
      color: var(--main-gray);

      input[type="checkbox"] {
        width: 17px;
        height: 17px;
        cursor: pointer;
      }
    }
  }
}

.cars-list__section {
  width: 100%;
  height: max-content;

  .row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 12px;
    row-gap: 35px;
  }
}

</style>