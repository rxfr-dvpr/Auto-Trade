import { defineStore } from "pinia";

export const carsStore = defineStore('Cars Store', {
    state: () => ({
        cars: [
            {
                model: 'Lexus LX LX570d',
                year: '2022',
                new: true,
                bgTxt: 'lexus',
                img: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Flexus570.png?alt=media&token=51f6f415-2804-4fef-b5e2-215f19c47ddb',
                engine: '5.7',
                drivetrain: 'awd',
                body: 'suv',
                price: 435000,
                currency: 'aed'
            },
            {
                model: 'Mitsubishi Pajero Sport GLX',
                year: '2023',
                new: true,
                bgTxt: 'mitsubishi',
                img: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fmistsubishi.png?alt=media&token=184c5b7e-9854-440a-aae1-6c6f8d88f0cf',
                engine: '2.4',
                drivetrain: 'awd',
                body: 'suv',
                price: 131000,
                currency: 'aed'
            },
            {
                model: 'Kia K8 GDI LX',
                year: '2024',
                new: true,
                bgTxt: 'kia',
                img: '',
                engine: '3.5',
                drivetrain: 'fwd',
                body: 'suv',
                price: 195000,
                currency: 'aed'
            },
            {
                model: 'Lexus UX200 Luxury',
                year: '2022',
                new: true,
                bgTxt: 'lexus',
                img: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Flexusux200.png?alt=media&token=f6aa9d6f-cac5-4966-8ae9-2f890cbff3f8',
                engine: '2.0',
                drivetrain: 'awd',
                body: 'suv',
                price: 160000,
                currency: 'aed'
            },
            {
                model: 'Mercedes-Benz G-Class',
                year: '2022',
                new: true,
                bgTxt: 'mercedes',
                img: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fg63.png?alt=media&token=42a4a17e-63ff-4c9a-832b-24709f0fb849',
                engine: '4.0',
                drivetrain: 'awd',
                body: 'suv',
                price: 600000,
                currency: 'aed'
            },
            {
                model: 'Kia Carnival GDI L',
                year: '2024',
                new: true,
                bgTxt: 'kia',
                img: '',
                engine: '3.5',
                drivetrain: 'fwd',
                body: 'mini van',
                price: 152000,
                currency: 'aed'
            },
            {
                model: 'Toyota Crown Platinum (Hybrid)',
                year: '2023',
                new: true,
                bgTxt: 'toyota',
                img: '',
                engine: '2.4',
                drivetrain: 'awd',
                body: 'sedan',
                price: 229900,
                currency: 'aed'
            },
            {
                model: 'Lexus LC 500 Convertible V8 Titanium',
                year: '2024',
                new: true,
                bgTxt: 'lexus',
                img: '',
                engine: '5.0',
                drivetrain: 'rwd',
                body: 'coupe',
                price: 495000,
                currency: 'aed'
            },
        ]
    })
})