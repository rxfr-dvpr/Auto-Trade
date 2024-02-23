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
        ]
    })
})