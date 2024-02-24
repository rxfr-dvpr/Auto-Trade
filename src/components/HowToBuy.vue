<template>
  <section class="buy__section">
    <div class="container">
        <div class="row">
            <h2 class="buy-title all-title">{{ store.title }}</h2>
        </div>
    </div>
  </section>
</template>

<script>
import { buyStore } from "@/stores/buyStore.js";

export default {
    name: 'How to Buy',
    data() {
        return {
            store: buyStore()
        }
    }
}
 
</script>

<style lang="scss" scoped>

.buy__section {
    width: 100%;

    .row {
        flex-direction: column;
        align-items: center;
        row-gap: 25px;
    }

    .buy-title {
        max-width: 700px;
        width: 100%;
        text-align: center;
    }
}

</style>