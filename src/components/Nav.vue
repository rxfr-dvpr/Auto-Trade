<template>
  <nav class="nav">
    <div class="container">
      <div class="row">
        <router-link to="/" class="nav-logo">
          <img src="@/assets/images/nav-logo.svg" alt="" class="nav-logo-img">
        </router-link>

        <div class="nav__collapse">
          <ul class="nav__list">
            <li class="nav__list-item" v-for="(link, idx) in store.navList" :key="idx">
              <a :href="link.url" class="nav__list-link">{{ link.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { navStore } from "@/stores/navStore.js";

export default {
  name: 'Navigation',
  data() {
    return {
      store: navStore()
    }
  },
  mounted() {
    const nav = document.querySelector('nav') 
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav.style.top = 0
        nav.style.backdropFilter = 'blur(10px)'
      } else {
        nav.style.top = '50px'
        nav.style.backdropFilter = 'blur(0px)'
      }
    })
  }
}

</script>

<style lang="scss" scoped>

.nav {
  width: 100%;
  padding: 4px 0;
  border-top: solid 2px var(--main-white);
  border-bottom: solid 2px var(--main-white);
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 2024;
  transition: .2s;

  .row {
    justify-content: space-between;
    align-items: center;
  }

  &-logo {
    max-width: 200px;
    width: 100%;

    &-img {
      width: 100%;
    }
  }

  &__collapse {
    max-width: 930px;
    width: 100%;
  }

  &__list {
    max-width: 410px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 25px;

    &-link {
      font-size: 14px;
      color: var(--main-white);
      text-transform: uppercase;
      font-weight: 500;
      transition: .3s;

      &:hover {
        color: var(--main-blue);
      }
    }
  }
}

</style>