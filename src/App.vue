<template>
  <NavTop/>

  <Nav/>
  
  <router-view/>

  <Footer/>

  <FooterBottom/>
</template>

<script>
import Nav from './components/Nav.vue'
import NavTop from './components/NavTop.vue'
import Footer from './components/Footer.vue'
import FooterBottom from './components/FooterBottom.vue'

export default {
  name: 'App',
  components: {
    NavTop,
    Nav,
    Footer,
    FooterBottom
  }
}

</script>

<style lang="scss" scoped>

</style>