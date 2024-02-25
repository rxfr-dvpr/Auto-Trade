import { defineStore } from "pinia";

export const navStore = defineStore('Nav Store', {
    state: () => ({
        navList: [
            {
                name: 'for sale',
                url: '#sale'
            },
            {
                name: 'autoparts',
                url: '#parts'
            },
            {
                name: 'servicing',
                url: '#service'
            }
        ],
        navLogo: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/nav-logo.svg?alt=media&token=43f5aaad-84e2-4cf3-a868-c33cca1f487b',
        navLogoDark: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/nav-logo-dark.svg?alt=media&token=31efc072-8be8-4cba-8554-b6dc9cb088f0'
    })
})