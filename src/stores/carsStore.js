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
                currency: 'aed',
                link: 'lx570',
                sliderImgs: [
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Flx570-1.jpg?alt=media&token=c991fd2f-a79b-41ce-8b85-1ce85e6dc3c1',
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Flx570-2.jpg?alt=media&token=f78f5e02-961f-48e0-87ff-92ad1b3ff3d7',
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Flx570-3.jpg?alt=media&token=e22d3561-7e29-429c-91e1-92c5865fee3d',
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Flx570-4.jpg?alt=media&token=786e3333-75ed-4b0b-8692-92b382130c4c',
                ],
                engineType: 'petrol',
                power: 367,
                acceleration: '7.7',
                consuption: '14.4',
                gears: 6,
                trunk: 701,
                gearbox: 'automatic',
                seater: 7
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
                currency: 'aed',
                link: 'pajero',
                sliderImgs: [
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Fpajero-1.jpg?alt=media&token=21ba76bd-7271-4e38-88fa-a12b723bc93d',
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Fpajero-2.jpg?alt=media&token=a84e0c6d-acfb-4314-bafa-7db624f06b8e',
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Fpajero-3.jpg?alt=media&token=70d271b2-efa9-435c-aa65-091c344bee74',
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Fpajero-4.jpg?alt=media&token=2a18b8d0-7d41-4644-a787-961c4701618f',
                ],
                engineType: 'Diesel',
                power: 181,
                acceleration: '9.5',
                consuption: '8',
                gears: 8,
                trunk: 131,
                gearbox: 'automatic',
                seater: 7
            },
            {
                model: 'Kia K8 GDI LX',
                year: '2024',
                new: true,
                bgTxt: 'kia',
                img: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fkiak8.png?alt=media&token=337dc19d-068e-4a8e-ac69-66aca913cdaa',
                engine: '3.5',
                drivetrain: 'fwd',
                body: 'suv',
                price: 195000,
                currency: 'aed',
                link: 'k8',
                sliderImgs: [
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Fk8-1.jpg?alt=media&token=26beab6c-5c25-4677-bd43-e3e9a9e46cb1',
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Fk8-2.jpg?alt=media&token=2194c05d-8630-45fe-a2a5-380802738c07',
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Fk8-3.jpg?alt=media&token=e0407db7-8a7c-4bc9-b00d-fc921c6b0aea',
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Fk8-4.jpg?alt=media&token=b0c71cc3-0438-42d1-861a-802776e2900b',
                ],
                engineType: 'petrol',
                power: 300,
                acceleration: '6.5',
                consuption: '9.4',
                gears: 8,
                trunk: 510,
                gearbox: 'automatic',
                seater: 5
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
                currency: 'aed',
                link: 'ux200',
                sliderImgs: [
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Fux200-1.jpg?alt=media&token=afc8a834-d8f8-46ac-aa96-f8218638aad9',
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Fux200-2.jpg?alt=media&token=1d8af04c-61a6-468d-9277-62458a4e231d',
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Fux200-3.jpg?alt=media&token=e79a7654-f90c-42dd-a344-ef34f2d7732f',
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Fux200-4.jpg?alt=media&token=1144de26-1c2a-4494-92b1-9d960eed95ae',
                ],
                engineType: 'petrol',
                power: 150,
                acceleration: '8.9',
                consuption: '7.1',
                gears: 8,
                trunk: 484,
                gearbox: 'vsd',
                seater: 5
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
                currency: 'aed',
                link: 'g-class',
                sliderImgs: [
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Fgclass-1.jpg?alt=media&token=63987fa3-f073-42a3-a76c-5d1362c8fd10',
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Fgclass-2.jpg?alt=media&token=1ce72175-8b68-4799-99af-d4671d5106f2',
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Fgclass-3.jpg?alt=media&token=5172c794-39fa-4645-9505-5ad23e3a98e5',
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Fgclass-4.jpg?alt=media&token=87399de9-60f4-44dd-9bd2-0d5346cd4dce',
                ],
                engineType: 'petrol',
                power: 585,
                acceleration: '4.5',
                consuption: '17.1',
                gears: 8,
                trunk: 667,
                gearbox: 'automatic',
                seater: 5
            },
            {
                model: 'Kia Carnival GDI L',
                year: '2024',
                new: true,
                bgTxt: 'kia',
                img: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fkiacarnival.png?alt=media&token=46a77b26-0633-4ddc-ac80-1c6dabf4f9e7',
                engine: '3.5',
                drivetrain: 'fwd',
                body: 'mini van',
                price: 152000,
                currency: 'aed',
                link: 'carnival',
                sliderImgs: [
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Fcarnival-1.jpg?alt=media&token=3fe1aa37-420e-45ef-9d91-6fea81f4f053',
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Fcarnival-2.jpg?alt=media&token=12d3e6fc-2749-4ddb-a708-b6e839c1cfc0',
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Fcarnival-3.jpeg?alt=media&token=ac1db5d1-7f89-4f58-9983-516559765c58',
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Fcarnival-4.jpg?alt=media&token=0db85bf9-f4b8-4b53-b3bf-8707f47b06b3',
                ],
                engineType: 'petrol',
                power: 233,
                acceleration: '10.7',
                consuption: '7.8',
                gears: 8,
                trunk: 627,
                gearbox: 'automatic',
                seater: 7
            },
            {
                model: 'Toyota Crown Platinum (Hybrid)',
                year: '2023',
                new: true,
                bgTxt: 'toyota',
                img: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Ftoyotacrown.png?alt=media&token=ab877d5d-2f42-4d8d-a74e-48077ffc7c4a',
                engine: '2.4',
                drivetrain: 'awd',
                body: 'sedan',
                price: 229900,
                currency: 'aed',
                link: 'crown',
                sliderImgs: [
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Fcrown-1.jpg?alt=media&token=961b8162-1d58-4a01-8fc1-ecf73d4ffa45',
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Fcrown-2.jpg?alt=media&token=78edbdaa-ce08-4bdd-9d65-740f65e76d8c',
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Fcrown-3.jpg?alt=media&token=1bb538bd-ff20-4b76-8d7b-f510036117ba',
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Fcrown-4.jpg?alt=media&token=dffdc509-99f5-44b7-bd6f-def0bc4902ce',
                ],
                engineType: 'hybrid',
                power: 340,
                acceleration: '5.7',
                consuption: '8.1',
                gears: 6,
                trunk: 627,
                gearbox: 'automatic',
                seater: 5
            },
            {
                model: 'Lexus LC 500 Convertible V8 Titanium',
                year: '2024',
                new: true,
                bgTxt: 'lexus',
                img: 'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Flexuslc500.png?alt=media&token=3314c727-37ba-48a5-b15c-9e0f874c4a9d',
                engine: '5.0',
                drivetrain: 'rwd',
                body: 'coupe',
                price: 495000,
                currency: 'aed',
                link: 'lc500',
                sliderImgs: [
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Flc500-1.jpg?alt=media&token=fddc177c-fe5a-4283-b0cb-d9a58c90fdc4',
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Flc500-2.jpg?alt=media&token=cfd67641-a9c6-47f1-9d7e-0a2388f65fb3',
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Flc500-3.jpg?alt=media&token=709157c3-ad2f-413e-939b-ac15cbfade6d',
                    'https://firebasestorage.googleapis.com/v0/b/union-auto-trade.appspot.com/o/Cars%2Fall-images%2Flc500-4.jpg?alt=media&token=b07e6772-c943-4072-8fed-3540c5d01419',
                ],
                engineType: 'petrol',
                power: 471,
                acceleration: '4.4',
                consuption: '12.3',
                gears: 8,
                trunk: 197,
                gearbox: 'automatic',
                seater: 4
            }
        ]
    })
})