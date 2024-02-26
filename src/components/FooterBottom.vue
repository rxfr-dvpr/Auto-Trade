<template>
  <div class="footer__bottom">
    <div class="container">
        <div class="row">
            <div class="footer__bottom-card" v-for="(card, idx) in cards" :key="idx">
                <div class="card-icons">
                    <span class="card-main-icon" v-html="card.icon"></span>
                    <span class="card-info-icon"><i class="fal fa-info-circle"></i></span>
                </div>

                <span class="card-name">{{ card.name }}</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Footer Bottom',
    data() {
        return {
            cards: [
                {
                    icon: '<i class="fal fa-file-invoice"></i>',
                    name: 'invoice'
                },
                {
                    icon: '<i class="fas fa-dollar-sign"></i>',
                    name: 'usdt'
                },
                {
                    icon: '<i class="far fa-money-bill"></i>',
                    name: 'cash'
                }
            ]
        }
    }
}

</script>

<style lang="scss" scoped>

.footer__bottom {
    width: 100%;
    padding: 20px 0;

    .row {
        justify-content: center;
        flex-wrap: wrap;
        row-gap: 15px;
        column-gap: 8px;
    }

    &-card {
        max-width: 200px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 25px;
        align-items: flex-end;
        border: solid 2px #D9D9D9;
        border-radius: 7px;
        padding: 15px;

        .card-icons {
            width: 100%;
            display: flex;
            justify-content: space-between;
            
            .card-main-icon {
                font-size: 25px;
            }

            .card-info-icon {
                font-size: 20px;
                cursor: pointer;
            }
        }

        .card-name {
            font-size: 12px;
            text-transform: uppercase;
            font-weight: 500;
        }
    }
}

</style>