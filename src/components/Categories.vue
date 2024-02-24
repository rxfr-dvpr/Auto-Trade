<template>
  <section class="categories__section">
    <div class="container">
        <div class="row">
            <div :class="`categories-item item-${idx + 1}`" v-for="(item, idx) in store.items" :key="idx">
                <img :src="item.img" alt="" class="item-img">

                <p class="item-name">{{ item.name }}</p>
                <a :href="item.url" class="item-link">more</a>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { categoriesStore } from "@/stores/categoriesStore.js";

export default {
    name: 'Categories',
    data() {
        return {
            store: categoriesStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.categories__section {
    width: 100%;

    .row {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-column-gap: 24px;
        grid-row-gap: 24px;
    }

    .categories-item {
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        row-gap: 150px;
        padding: 30px;
        border-radius: 10px;
        overflow: hidden;

        .item-img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            object-fit: cover;
        }

        .item-name {
            font-size: 24px;
            color: var(--main-white);
            text-transform: uppercase;
            font-weight: 500;
        }

        .item-link {
            margin-top: auto;
            margin-left: auto;
            padding: 20px 35px;
            backdrop-filter: blur(10px);
            font-size: 14px;
            text-transform: uppercase;
            font-weight: 500;
            color: var(--main-white);
            border-radius: 10px;
            border: solid 2px var(--main-gray);
            transition: .3s;

            &:hover {
                background: var(--main-blue);
                border-color: var(--main-blue);
            }
        }

        &.item-1 { grid-area: 1 / 1 / 5 / 3; }
        &.item-2 { grid-area: 1 / 3 / 3 / 5; }
        &.item-3 { grid-area: 3 / 3 / 5 / 5; }
    }
}

</style>