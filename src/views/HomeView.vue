<template>
  <Header/>

  <main class="main">
    <HowToBuy/>
  </main>
</template>

<script>
import Header from '@/components/Header.vue'
import HowToBuy from '@/components/HowToBuy.vue'

export default {
  name: 'Home Page',
  components: {
    Header,
    HowToBuy
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