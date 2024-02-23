import { defineStore } from "pinia";

export const headerStore = defineStore('Header Store', {
    state: () => ({
        title: 'find your next car',
        subtitle: 'premium cars from dubai'
    })
})