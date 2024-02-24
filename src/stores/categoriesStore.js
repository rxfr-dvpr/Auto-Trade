import { defineStore } from "pinia";

export const categoriesStore = defineStore('Categories Store', {
    state: () => ({
        items: [
            {
                name: 'cars for sale',
                img: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Categories%2Fsale-img.png?alt=media&token=e331ca5a-e574-4f9b-a98f-8db991c7b21c',
                url: '#sale'
            },
            {
                name: 'autoparts',
                img: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Categories%2Fparts-img.png?alt=media&token=a1e49039-863c-49d4-8da7-ae74b5839322',
                url: '#parts'
            },
            {
                name: 'servicing',
                img: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Categories%2Fservice-img.png?alt=media&token=3a21ec58-90f5-44bc-95f4-045579a7a510',
                url: '#service'
            }
        ]
    })
})