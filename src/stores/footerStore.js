import { defineStore } from "pinia";

export const footerStore = defineStore('Footer Store', {
    state: () => ({
        logo: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Footer%2Ffooter-logo.svg?alt=media&token=0308698c-f936-43ba-a452-141c9ed79525',
        brandTxt: 'Buy, autoparts or service premium cars from Dubai',
        contactLinks: [
            {
                title: 'Our address',
                txt: 'Showroom 1, Al RCT building, Al Ittihad Rd, Port RXFR, Dubai, UAE',
                url: 'https://maps.app.goo.gl/QLPEjoHmQZi4nD2W7'
            },
            {
                title: 'Call the office at',
                txt: '+998 99 817 30 66',
                url: 'tel:+998998173066'
            }
        ]
    })
})