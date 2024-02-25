import { defineStore } from "pinia";

export const chooseStore = defineStore('Choose Store', {
    state: () => ({
        title: 'choose your vehicle',
        options: [
            {
                type: 'body type',
                selected: true,
                items: [
                    {
                        name: 'suv',
                        img: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Choose%2FbodyTypes%2Fsuv-img.png?alt=media&token=124e7bb6-1e6a-40a4-ad5a-087841771b8e'
                    },
                    {
                        name: 'sedan',
                        img: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Choose%2FbodyTypes%2Fsedan-img.png?alt=media&token=c4c7951d-8e7b-475b-ab5d-da5c7547d455'
                    },
                    {
                        name: 'wagon',
                        img: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Choose%2FbodyTypes%2Fwagon-img.png?alt=media&token=14a057ef-3a6e-4e66-b115-37cc4e19663f'
                    },
                    {
                        name: 'hatch',
                        img: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Choose%2FbodyTypes%2Fhatch-img.png?alt=media&token=840ae1f5-1f5e-4d57-ae88-2d65ecdf28af'
                    },
                    {
                        name: 'ute',
                        img: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Choose%2FbodyTypes%2Fute-img.png?alt=media&token=ff1d9002-b2e1-44c3-8a1a-ee502607310e'
                    },
                    {
                        name: 'convertible',
                        img: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Choose%2FbodyTypes%2Fconvertible-img.png?alt=media&token=c1127f70-58c2-420b-9926-b076833691f1'
                    },
                ]
            },
            {
                type: 'brand',
                selected: false,
                items: [
                    {
                        name: 'toyota',
                        img: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Choose%2Fbrands%2Ftoyota.png?alt=media&token=464a15cf-cb39-4f5b-9194-afecf84fbaec'
                    },
                    {
                        name: 'lexus',
                        img: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Choose%2Fbrands%2Flexus.png?alt=media&token=9a0e50d9-cbf2-48d5-8da4-f8a1d0d03b75'
                    },
                    {
                        name: 'mercedes-benz',
                        img: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Choose%2Fbrands%2Fmercedes.png?alt=media&token=bd299c9b-f211-4872-b736-a0ddd86a02dd'
                    },
                    {
                        name: 'ford',
                        img: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Choose%2Fbrands%2Fford.png?alt=media&token=51a57561-55ce-4968-b15f-1eefa0ac85d1'
                    },
                    {
                        name: 'mitsubishi',
                        img: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Choose%2Fbrands%2Fmitsubishi.png?alt=media&token=f4f0c5c2-eac8-41c5-9c47-072f61a8c436'
                    },
                    {
                        name: 'subaru',
                        img: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Choose%2Fbrands%2Fsubaru.png?alt=media&token=47254398-62dc-4439-b500-c7b503f4abdc'
                    },
                    {
                        name: 'audi',
                        img: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Choose%2Fbrands%2Faudi.png?alt=media&token=349cbb76-9441-4e8a-a988-fd8fdb58cb0c'
                    },
                ]
            }
        ]
    })
})