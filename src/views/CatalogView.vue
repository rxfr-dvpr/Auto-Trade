<template>
  <Header/>
  
  <main class="main">
    <aside class="filter-aside">
      <p>filter soon</p>
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
  } 
}

</script>

<style lang="scss" scoped>

.main {
  max-width: 1730px;
  width: 100%;
  position: relative;
  padding: 95px 0;
  display: flex;
  gap: 35px;
  margin: 0 auto;
}

.filter-aside {
  max-width: 315px;
  width: 100%;
  height: 100vh;
  background: var(--main-white);
  padding: 20px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 20px;
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