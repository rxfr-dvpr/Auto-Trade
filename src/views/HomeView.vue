<template>
  <Header/>

  <main class="main">
    <Categories :numberOfItem="3"/>

    <Choose/>

    <Deals/>
    
    <Banner/>

    <HowToBuy/>

    <About/>
  </main>
</template>

<script>
import Header from '@/components/Header.vue'
import HowToBuy from '@/components/HowToBuy.vue'
import Categories from '@/components/Categories.vue'
import Banner from '@/components/Banner.vue'
import Choose from '@/components/Choose.vue'
import About from '@/components/About.vue'
import Deals from '@/components/Deals.vue'

export default {
  name: 'Home Page',
  components: {
    Header,
    Deals,
    HowToBuy,
    Categories,
    Banner,
    Choose,
    About
  }
}

</script>

<style lang="scss" scoped>

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 120px;
  padding: 90px 0;
}

</style>