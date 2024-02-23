<template>
  <NavTop/>

  <Nav/>
  
  <router-view/>
</template>

<script>
import Nav from './components/Nav.vue'
import NavTop from './components/NavTop.vue'

export default {
  name: 'App',
  components: {
    NavTop,
    Nav
  }
}

</script>

<style lang="scss" scoped>

</style>