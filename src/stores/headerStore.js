import { defineStore } from "pinia";

export const headerStore = defineStore('Header Store', {
    state: () => ({
        title: 'find your next car',
        subtitle: 'premium cars from dubai',
        img: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Header%2Fheader-bg.png?alt=media&token=ce8042a1-f74f-44d7-94ee-d6872ca3bcc9',
        btn: {
            txt: "let's go",
            vector: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Header%2Fheader-btn.svg?alt=media&token=a1bca828-9ffc-439e-979c-a1578696ac6f'
        }
    })
})