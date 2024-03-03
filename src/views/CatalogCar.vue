<template>
  <h1>catalog car</h1>

  <main class="main">
    <Deals/>
  </main>
</template>

<script>
import Deals from '@/components/Deals.vue'

export default {
  name: 'Catalog Car',
  components: {
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