<template>
  <NavTop/>

  <Nav/>
  
  <router-view/>

  <Footer/>
</template>

<script>
import Nav from './components/Nav.vue'
import NavTop from './components/NavTop.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavTop,
    Nav,
    Footer
  }
}

</script>

<style lang="scss" scoped>

</style>