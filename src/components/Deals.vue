<template>
  <section class="deals__section">
    <div class="container">
        <div class="row">
            <div class="car-card" v-for="(car, idx) in store.cars" :key="idx">
                <div class="car-card-top">
                    <p class="car-model">
                        {{ car.model }}
                        <span class="car-model-year">{{ car.year }}</span>
                    </p>

                    <span :class="`car-status ${car.new ? 'new-car': 'used-car'}`">
                        {{ car.new ? 'new' : 'used' }}
                    </span>
                </div>

                <div class="car-img-box">
                    <span class="car-bg-name">{{ car.bgTxt }}</span>
                    <img :src="car.img" alt="" class="car-img">
                </div>

                <div class="car-descr">
                    <span class="car-engine descr-txt">
                        <img :src="engineIcon" alt="" class="car-descr-icon">
                        {{ car.engine }} L
                    </span>
                    <span class="car-drivetrain descr-txt">
                        <img :src="drivetrainIcon" alt="" class="car-descr-icon">
                        {{ car.drivetrain }}
                    </span>
                    <span class="car-body descr-txt">
                        <img :src="bodyIcon" alt="" class="car-descr-icon">
                        {{ car.body }}
                    </span>
                </div>

                <button class="car-card-btn">{{ splitPrice(car.price) }} {{ car.currency }}</button>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { carsStore } from "@/stores/carsStore.js";

export default {
    name: 'Deals Section',
    data() {
        return {
            store: carsStore(),
            engineIcon: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Ficons%2Fengine.svg?alt=media&token=cd93f535-407f-4b56-8321-3021b2d70cfb',
            drivetrainIcon: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Ficons%2Fdrivetrain.svg?alt=media&token=e0d1df14-1a44-4605-ba87-d462ac54ce4a',
            bodyIcon: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Ficons%2Fbody.svg?alt=media&token=16a8c95c-1122-4cce-8342-4045b992a275'
        }
    },
    methods: {
        splitPrice(price) {
            price = price.toString().split('');
            const insertIndices = [3, 2, 1, 2, 3];
            const length = price.length;

            if (length >= 5 && length <= 9) {
                price.splice(insertIndices[length - 2], 0, ' ');
                if (length >= 7) {
                    price.splice(5, 0, ' ');
                }
            }

            return price.join('');
        }
    }
}

</script>

<style lang="scss" scoped>

.deals__section {
    width: 100%;

    .row {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 12px;
        row-gap: 35px;
    }

    .car-card {
        width: 100%;
        border: solid 1px #D9D9D9;
        border-radius: 10px;
        padding: 20px 15px;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        justify-content: space-between;
        cursor: pointer;
        background: var(--bg-color);
        transition: .3s;

        &-top {
            width: 100%;
            display: flex;
            justify-content: space-between;
            gap: 8px;

            .car-model {
                max-width: 230px;
                width: 100%;
                display: flex;
                flex-direction: column;
                row-gap: 5px;
                font-size: 16px;
                text-transform: capitalize;
                font-weight: 400;
                
                &-year {
                    font-size: 10px;
                    font-weight: 500;
                }
            }

            .car-status {
                font-size: 10px;
                text-transform: uppercase;
                display: flex;
                gap: 3px;
                align-items: center;
                font-weight: 500;
                height: 20px;

                &::before {
                    content: '';
                    width: 5px;
                    height: 5px;
                    background: var(--main-blue);
                    border-radius: 50%;
                    display: block;
                }

                &.new-car {
                    color: var(--main-blue);
                }

                &.used-car {
                    color: red;

                    &::before {
                        background: red;
                    }
                }
            }
        }

        .car-img-box {
            width: 100%;
            position: relative;
            display: flex;
            justify-content: center;
            padding-top: 15px;
            font-size: 30px;

            .car-bg-name {
                font-size: 1em;
                color: var(--main-white);
                text-transform: uppercase;
                font-weight: 500;
                letter-spacing: 5px;
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                transition: .4s;
            }

            .car-img {
                max-width: 223px;
                width: 100%;
                object-fit: contain;
                z-index: 5;
            }
        }

        .car-descr {
            width: 100%;
            display: flex;
            gap: 20px;
            align-items: center;

            .descr-txt {
                font-size: 10px;
                color: var(--main-black);
                text-transform: uppercase;
                font-weight: 500;
                display: flex;
                align-items: center;
                gap: 5px;
            }

            &-icon {
                max-width: 20px;
                width: max-content;
            }
        }

        &-btn {
            width: 100%;
            background: transparent;
            border-radius: 8px;
            border: solid 2px var(--main-black);
            padding: 14.5px 0;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
        }

        &:hover {
            background: var(--main-white);

            .car-bg-name {
                color: var(--bg-color);
            }
        }
    }
}

</style>