import { defineStore } from "pinia";

export const buyStore = defineStore('Buy Store', {
    state: () => ({
        title: 'как купить автомобиль с доставкой в страны СНГ',
        steps: [
            {
                name: 'заявка',
                txt: 'вы звоните нам или оставляете заявку на сайте и с Вами связывается наш менеджер.'
            }
        ]
    })
})