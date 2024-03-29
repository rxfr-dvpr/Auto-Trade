import { defineStore } from "pinia";

export const aboutStore = defineStore('About Store', {
    state: () => ({
        cards: [
            {
                name: 'покупка автомобиля',
                txt: 'в нашем автосалоне можно приобрести новые машины. Также можно воспользоваться услугой подбора автомобиля с пробегом и заказа авто с аукционов США.'
            },
            {
                name: 'индивидуальный подход',
                txt: 'в спектр наших услуг дополнительно входит продажа и индивидуальный подбор мототехники, квадроциклов, коммерческого транспорта специальной техники.'
            },
            {
                name: 'опыт и надежность',
                txt: 'более 9 лет безупречной успешной работы, за это время мы обслужили огромное количество корпоративных и частных клиентов.'
            },
            {
                name: 'сотрудничество с нами',
                txt: 'гарантия надежного партнерства, доступных цен и индивидуального подхода к каждому клиенту.'
            },
        ],
        img: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/About%2Fabout-bg-img.png?alt=media&token=a04bf24a-e00d-4576-8847-7113a793aae4'
    })
})