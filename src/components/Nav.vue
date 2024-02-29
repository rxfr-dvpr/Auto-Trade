<template>
  <nav class="nav" :class="{'catalog-nav': this.$route.name !== 'home'}">
    <div class="container">
      <div class="row">
        <router-link to="/" class="nav-logo">
          <img :src="scrollValue > 20 || this.$route.name !== 'home' ? store.navLogoDark : store.navLogo" alt="" class="nav-logo-img">
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
      store: navStore(),
      scrollValue: window.scrollY
    }
  },
  mounted() {
    const nav = document.querySelector('nav')

    window.addEventListener('scroll', () => {
      this.scrollValue = window.scrollY
      window.scrollY > 20 ? nav.classList.add('scrolled') : nav.classList.remove('scrolled')
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
  top: 46px;
  left: 0;
  z-index: 2024;
  transition: .2s;

  &.catalog-nav {
    background: var(--bg-color);
    border-color: #D9D9D9;
    position: sticky !important;

    .nav__list-link {
      color: var(--main-black);
    }
  }

  &.scrolled {
    top: 0 !important;
    background: var(--bg-color);
    border-color: var(--bg-color) !important;
    box-shadow: 0px 10px 15px rgba($color: #000000, $alpha: .2);

    .nav__list-link {
      color: var(--main-black);
    }
  }

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
        color: var(--main-blue) !important;
      }
    }
  }
}

</style>