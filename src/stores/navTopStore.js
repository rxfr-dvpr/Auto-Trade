import { defineStore } from "pinia";

export const navTopStore = defineStore('Nav Top Store', {
  state: () => ({
    langs: [
      {
        name: 'english',
        selected: true
      },
      {
        name: 'русский',
        selected: false
      },
      {
        name: "o'zbekcha",
        selected: false
      },
    ],
    curs: [
      {
        name: 'aed',
        selected: true
      },
      {
        name: 'usd',
        selected: false
      },
      {
        name: "rub",
        selected: false
      },
      {
        name: "so'm",
        selected: false
      }
    ]
  })
})