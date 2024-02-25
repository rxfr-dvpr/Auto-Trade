<template>
  <section class="banner__section">
    <div class="container">
        <div class="row">
            <img :src="bannerImg" alt="" class="banner-img">
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'Banner Section',
    data() {
        return {
            bannerImg: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Banner%2Fbanner-img.png?alt=media&token=b074c040-e85a-4b5b-a943-7bbec0280bc7'
        }
    }
}

</script>

<style lang="scss" scoped>

.banner__section {
    width: 100%;
    
    .banner-img {
        width: 100%;
        object-fit: cover;
        border-radius: 30px;
    }
}

</style>