<template>
  <Header/>
  
  <main class="main">
    <aside class="filter-aside" :class="{'opened': filterOpened}">
      <div class="sort-filter all-filter">
        <span class="all-filter-title">sort by</span>

        <select name="" class="sort-filter-select">
          <option :value="option.name" v-for="(option, idx) in store.filter.slctOptions" 
          :key="idx" :selected="option.selected">{{ option.name }}</option>
        </select>
      </div>

      <div class="price-filter all-filter">
        <span class="all-filter-title">price</span>

        <div class="price-filter-inputs">
          <input type="number" class="min-price-inp all-inp" placeholder="min">
          <input type="number" class="max-price-inp all-inp" placeholder="max">
        </div>
      </div>
      
      <div class="styles-filter all-filter">
        <span class="all-filter-title">car styles</span>

        <div class="styles-filter-flexbox">
          <span class="styles-filter-item" v-for="(item, idx) in store.filter.carStyles" 
          :key="idx" :class="{'active': item.active}" @click="carStyleActive(idx)">{{ item.name }}</span>
        </div>
      </div>

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

      <button class="mb-btn" @click="filterOpened = !filterOpened" v-if="wSize < 992">
        <i class="fas fa-chevron-right" v-if="!filterOpened"></i>
        <i class="fas fa-chevron-left" v-else></i>
      </button>
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
      store: catalogStore(),
      filterOpened: false,
      wSize: window.innerWidth
    }
  },
  methods: {
    bTypeActive(idx) {
      this.store.filter.bodyTypes.map(body => body.active = false);
      this.store.filter.bodyTypes[idx].active = true;

      setTimeout(() => {
        this.filterOpened = false        
      }, 200);

      window.scrollTo({ top: 500, behavior: 'smooth' })
    },
    carStyleActive(idx) {
      this.store.filter.carStyles.map(body => body.active = false);
      this.store.filter.carStyles[idx].active = true;

      setTimeout(() => {
        this.filterOpened = false        
      }, 200);

      window.scrollTo({ top: 500, behavior: 'smooth' })
    }
  },
  mounted() {
    window.addEventListener('resize', () => { this.wSize = window.innerWidth })
  }
}

</script>

<style lang="scss" scoped>

.main {
  max-width: 1730px;
  width: 100%;
  padding: 95px 0 45px;
  display: flex;
  gap: 20px;
  margin: 0 auto;
  justify-content: center;
  position: relative;
}

.filter-aside {
  max-width: 315px;
  width: 100%;
  height: max-content;
  background: var(--main-white);
  padding: 20px 15px;
  position: sticky;
  top: 80px;
  left: 15px;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  z-index: 500;

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

    .all-inp {
      max-width: 130px;
      width: 100%;
      border: solid 1px #D9D9D9;
      padding: 6px 8px;
      font-size: 12px;

      &::placeholder {
        text-transform: capitalize;
        color: #7B7B7B;
      }
    }
  }

  .sort-filter-select {
    max-width: 135px;
    width: 100%;
    text-transform: capitalize;
    border: solid 1px #D9D9D9;
    border-radius: 3px;
    cursor: pointer;
    padding: 6px 8px;
    font-size: 12px;

    option {
      padding: 6px 8px;
    }
  }

  .price-filter {
    &-inputs {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      column-gap: 10px;
      row-gap: 12px;
    }
  }

  .styles-filter {
    &-flexbox {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 12px;
      row-gap: 12px;
    }

    &-item {
      width: 100%;
      font-size: 12px;
      border: solid 1px #D9D9D9;
      border-radius: 4px;
      padding: 17px 0;
      cursor: pointer;
      transition: .4s;
      text-align: center;
      text-transform: capitalize;

      &:hover, &:active, &.active {
        color: var(--main-blue);
        border-color: var(--main-blue);
      }
    }
  }

  .body-filter {
    border-bottom: unset;
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

  .mb-btn {
    width: 30px;
    height: 35px;
    position: absolute;
    top: 5%;
    right: -30px;
    background: var(--main-white);
    border: 0;
    border-top: solid 1px #D9D9D9;
    border-right: solid 1px #D9D9D9;
    border-bottom: solid 1px #D9D9D9;
    padding: 6px 8px;
    display: grid;
    place-items: center;
    font-size: 12px;
  }
}


.cars-list__section {
  max-width: 1400px;
  width: 100%;
  height: max-content;

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 12px;
    row-gap: 35px;
  }
}

@media (max-width: 992px) {
  .main {
    padding: 80px 0 45px !important;
  }

  .filter-aside {
    position: absolute;
    left: -315px;
    transition: .4s;

    &.opened {
      left: 0;
      box-shadow: 10px 2px 10px rgba($color: #000000, $alpha: .2);
    }
  }
}

</style>