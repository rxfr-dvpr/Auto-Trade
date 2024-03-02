<template>
  <Header/>

  <main class="main">
    <Deals/>
  </main>
</template>

<script>
import Header from '@/components/Header.vue'
import Deals from '@/components/Deals.vue'

export default {
  name: 'Catalog Page',
  components: {
    Header,
    Deals
  }
}

</script>

<style lang="scss" scoped>

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 90px 0;
  row-gap: 120px;
}

</style>