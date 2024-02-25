<template>
  <section class="choose__section">
    <div class="container">
      <div class="row">
        <h2 class="choose-title all-title">{{ store.title }}</h2>

        <div class="choose__board">
          <div class="board__types">
            <span class="board__types-btn" v-for="(btn, id) in store.options" 
            :key="id" @click="selectType(id)" :class="{'selected': btn.selected}">{{ btn.type }}</span>
          </div>

          <div class="board__items" v-for="(types, idx) in store.options" :key="idx" v-show="types.selected">
            <div class="board__items-item" v-for="item in types.items" :key="item" @click="this.$router.push('/catalog')">
              <img :src="item.img" alt="" class="item-img">
              <p class="item-name">{{ item.name }}</p>
            </div>
          </div>

          <router-link to="/catalog" class="show-btn">show all</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { chooseStore } from "@/stores/chooseStore.js";

export default {
  name: 'Choose Section',
  data() {
    return {
      store: chooseStore()
    }
  },
  methods: {
    selectType(id) {
      this.store.options.map(item => item.selected = false)
      this.store.options[id].selected = true
    }
  }
}

</script>

<style lang="scss" scoped>

.choose__section {
  width: 100%;
  
  .row {
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
  }

  .choose__board {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 65px;
    align-items: center;

    .board__types {
      width: 100%;
      display: flex;

      &-btn {
        width: 100%;
        padding: 22px 0;
        border: solid 2px #D9D9D9;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        font-size: 16px;
        transition: .3s;
        cursor: pointer;

        &:first-of-type {
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
          border-right: 0;
        }

        &:last-of-type {
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
          border-left: 0;
        }

        &.selected {
          background: var(--main-blue);
          color: var(--main-white);
          border-color: var(--main-blue);

        }
      }
    }

    .board__items {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 20px;

      &-item {
        max-width: max-content;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 10px;
        cursor: pointer;
        min-height: 110px;

        .item-img {
          max-width: 190px;
        }

        .item-name {
          font-size: 14px;
          color: var(--main-blue);
          font-weight: 300;
          text-transform: capitalize;
          transition: .3s;
        }

        &:hover {
          .item-name {
            font-weight: 400;
            font-size: 15px;
            color: var(--main-black);
          }
        }
      }
    }

    .show-btn {
      padding: 10px 15px;
      font-size: 14px;
      color: var(--main-blue);
      font-weight: 300;
      border: solid 1px var(--main-blue);
      max-width: max-content;
      border-radius: 8px;
      transition: .3s;
    

      &::first-letter {
        text-transform: uppercase;
      }

      &:hover {
        background: var(--main-black);
        color: var(--main-white);
        border-color: var(--main-black);
      }
    }
  }
}

</style>