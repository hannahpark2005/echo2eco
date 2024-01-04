import { createData } from "../utils";

export const sensorsSampleData = [
    'Sensor 1',
    'Sensor 2'
]

//2023-08-11T12:34:56.789Z

export const alertsSampleData = [
    // createData(1, 'Sensor 1', 41.881832, -87.623177, 'rhino', 
    //     [
    //         {
    //             img: 'https://picsum.photos/200/200?grayscale',
    //             timestamp: '2022-08-13T12:34:56.789Z',
    //             description: '11091702',
    //             frequency: 5,
    //             dateInstalled: '2020-08-11T12:34:56.789Z',
    //             battery: '20%'
    //         },
    //     ],),
    {
        id: 1,
        sensorName: "Sensor 1",
        species: "rhino",
        latitude: 41.881832,
        longitude: -87.623177,
        moreInfo: {
            dateInstalled: "2020-08-11T12:34:56.789Z",
            decibel: 7,
            description: "11091702",
            frequency: 5,
            img: "https://picsum.photos/200/200?grayscale",
            timestamp: "2023-09-01T08:34:56.789Z"
        }
    },
    {
        id: 2,
        sensorName: "Sensor 2",
        species: "lion",
        latitude: 50.881832,
        longitude: -87.623177,
        moreInfo: {
            dateInstalled: "2020-08-11T12:34:56.789Z",
            decibel: 7,
            description: "11091702",
            frequency: 5,
            img: "https://picsum.photos/200/200?grayscale",
            timestamp: "2023-09-01T12:34:56.789Z"
        }
    },
    // createData(2, 'Sensor 2', 39.739235, -104.99025, 'deer', 
    //     [
    //         {
    //             img: 'https://picsum.photos/200/200?grayscale',
    //             timestamp: '2022-10-11T03:34:56.789Z',
    //             description: '11091702',
    //             frequency: 5,
    //             dateInstalled: '2020-10-11T3:34:56.789Z',
    //             battery: '20%'
    //         },
    //     ],),
    // createData(3, 'Sensor 3', 3.57221, 4.69026, 'lion', 'link',
    //     [
    //         {
    //             img: 'https://picsum.photos/200/200?grayscale',
    //             timestamp: '2022-10-12T08:34:56.789Z',
    //             description: '11091702',
    //             frequency: 5,
    //             dateInstalled: '2022-10-11T03:34:56.789Z',
    //             battery: '20%'
    //         },
    //     ],),
    // createData(4, 'Sensor 3', 20.57221, 48.69026, 'rhino', 'link', [
    //     {
    //         img: 'https://picsum.photos/200/200?grayscale',
    //         timestamp: '2022-11-13T12:34:56.789Z',
    //         description: '11091702',
    //         frequency: 5,
    //         dateInstalled: '2021-10-11T08:34:56.789Z',
    //         battery: '20%'
    //     },
    // ],),
    // createData(5, 'Sensor 2', 39.57221, 80.69026, 'deer', 'link', [
    //     {
    //         img: 'https://picsum.photos/200/200?grayscale',
    //         timestamp: '2022-11-14T08:34:56.789Z',
    //         description: '11091702',
    //         frequency: 5,
    //         dateInstalled: '2020-10-11T08:34:56.789Z',
    //         battery: '20%'
    //     },
    // ],),
    // createData(6, 'Sensor 2', 39.57221, 80.69026, 'deer', 'link', [
    //     {
    //         img: 'https://picsum.photos/200/200?grayscale',
    //         timestamp: '2022-12-11T08:34:56.789Z',
    //         description: '11091702',
    //         frequency: 5,
    //         dateInstalled: '2023-10-11T08:34:56.789Z',
    //         battery: '20%'
    //     },
    // ],),
    // createData(7, 'Sensor 2', 39.57221, 80.69026, 'deer', 'link', [
    //     {
    //         img: 'https://picsum.photos/200/200?grayscale',
    //         timestamp: '2022-12-20T08:34:56.789Z',
    //         description: '11091702',
    //         frequency: 5,
    //         dateInstalled: '2023-10-11T08:34:56.789Z',
    //         battery: '20%'
    //     },
    // ],),
    // createData(8, 'Sensor 2', 39.57221, 80.69026, 'deer', 'link', [
    //     {
    //         img: 'https://picsum.photos/200/200?grayscale',
    //         timestamp: '2022-12-21T08:34:56.789Z',
    //         description: '11091702',
    //         frequency: 5,
    //         dateInstalled: '2023-10-11T08:34:56.789Z',
    //         battery: '20%'
    //     },
    // ],),
    // createData(9, 'Sensor 2', 39.57221, 80.69026, 'deer', 'link', [
    //     {
    //         img: 'https://picsum.photos/200/200?grayscale',
    //         timestamp: '2023-01-01T08:34:56.789Z',
    //         description: '11091702',
    //         frequency: 5,
    //         dateInstalled: '2023-10-11T08:34:56.789Z',
    //         battery: '20%'
    //     },
    // ],),
    // createData(10, 'Sensor 2', 39.57221, 80.69026, 'deer', 'link', [
    //     {
    //         img: 'https://picsum.photos/200/200?grayscale',
    //         timestamp: '2023-02-11T08:34:56.789Z',
    //         description: '11091702',
    //         frequency: 5,
    //         dateInstalled: '2023-10-11T08:34:56.789Z',
    //         battery: '20%'
    //     },
    // ],),
    // createData(11, 'Sensor 2', 39.57221, 80.69026, 'deer', 'link', [
    //     {
    //         img: 'https://picsum.photos/200/200?grayscale',
    //         timestamp: '2023-03-11T08:34:56.789Z',
    //         description: '11091702',
    //         frequency: 5,
    //         dateInstalled: '2023-10-11T08:34:56.789Z',
    //         battery: '20%'
    //     },
    // ],),
    // createData(12, 'Sensor 2', 39.57221, 80.69026, 'deer', 'link', [
    //     {
    //         img: 'https://picsum.photos/200/200?grayscale',
    //         timestamp: '2023-04-11T08:34:56.789Z',
    //         description: '11091702',
    //         frequency: 5,
    //         dateInstalled: '2023-10-11T08:34:56.789Z',
    //         battery: '20%'
    //     },
    // ],),
    // createData(13, 'Sensor 2', 39.57221, 80.69026, 'deer', 'link', [
    //     {
    //         img: 'https://picsum.photos/200/200?grayscale',
    //         timestamp: '2023-05-11T08:34:56.789Z',
    //         description: '11091702',
    //         frequency: 5,
    //         dateInstalled: '2023-10-11T08:34:56.789Z',
    //         battery: '20%'
    //     },
    // ],),
    // createData(14, 'Sensor 2', 39.57221, 80.69026, 'deer', 'link', [
    //     {
    //         img: 'https://picsum.photos/200/200?grayscale',
    //         timestamp: '2023-06-11T08:34:56.789Z',
    //         description: '11091702',
    //         frequency: 5,
    //         dateInstalled: '2023-10-11T08:34:56.789Z',
    //         battery: '20%'
    //     },
    // ],),
    // createData(15, 'Sensor 2', 39.57221, 80.69026, 'deer', 'link', [
    //     {
    //         img: 'https://picsum.photos/200/200?grayscale',
    //         timestamp: '2023-07-11T08:34:56.789Z',
    //         description: '11091702',
    //         frequency: 5,
    //         dateInstalled: '2023-10-11T08:34:56.789Z',
    //         battery: '20%'
    //     },
    // ],),
    // createData(16, 'Sensor 2', 39.57221, 80.69026, 'deer', 'link', [
    //     {
    //         img: 'https://picsum.photos/200/200?grayscale',
    //         timestamp: '2023-08-11T08:34:56.789Z',
    //         description: '11091702',
    //         frequency: 5,
    //         dateInstalled: '2023-10-11T08:34:56.789Z',
    //         battery: '20%'
    //     },
    // ],),
    // createData(17, 'Sensor 2', 39.57221, 80.69026, 'deer', 'link', [
    //     {
    //         img: 'https://picsum.photos/200/200?grayscale',
    //         timestamp: '2023-09-11T08:34:56.789Z',
    //         description: '11091702',
    //         frequency: 5,
    //         dateInstalled: '2023-10-11T08:34:56.789Z',
    //         battery: '20%'
    //     },
    // ],),
    // createData(18, 'Sensor 2', 39.57221, 80.69026, 'deer', 'link', [
    //     {
    //         img: 'https://picsum.photos/200/200?grayscale',
    //         timestamp: '2023-10-11T08:34:56.789Z',
    //         description: '11091702',
    //         frequency: 5,
    //         dateInstalled: '2023-10-11T08:34:56.789Z',
    //         battery: '20%'
    //     },
    // ],),
    // createData(19, 'Sensor 2', 39.57221, 80.69026, 'deer', 'link', [
    //     {
    //         img: 'https://picsum.photos/200/200?grayscale',
    //         timestamp: '2023-11-11T08:34:56.789Z',
    //         description: '11091702',
    //         frequency: 5,
    //         dateInstalled: '2023-10-11T08:34:56.789Z',
    //         battery: '20%'
    //     },
    // ],),
    // createData(20, 'Sensor 2', 39.57221, 80.69026, 'deer', 'link', [
    //     {
    //         img: 'https://picsum.photos/200/200?grayscale',
    //         timestamp: '2023-11-11T08:34:56.789Z',
    //         description: '11091702',
    //         frequency: 5,
    //         dateInstalled: '2023-10-11T08:34:56.789Z',
    //         battery: '20%'
    //     },
    // ],),
    // createData(21, 'Sensor 2', 39.57221, 80.69026, 'deer', 'link', [
    //     {
    //         img: 'https://picsum.photos/200/200?grayscale',
    //         timestamp: '2023-11-11T08:34:56.789Z',
    //         description: '11091702',
    //         frequency: 5,
    //         dateInstalled: '2023-10-11T08:34:56.789Z',
    //         battery: '20%'
    //     },
    // ],),
    // createData(22, 'Sensor 2', 39.57221, 80.69026, 'deer', 'link', [
    //     {
    //         img: 'https://picsum.photos/200/200?grayscale',
    //         timestamp: '2023-11-11T08:34:56.789Z',
    //         description: '11091702',
    //         frequency: 5,
    //         dateInstalled: '2023-10-11T08:34:56.789Z',
    //         battery: '20%'
    //     },
    // ],),
    // createData(23, 'Sensor 2', 39.57221, 80.69026, 'deer', 'link', [
    //     {
    //         img: 'https://picsum.photos/200/200?grayscale',
    //         timestamp: '2023-11-11T08:34:56.789Z',
    //         description: '11091702',
    //         frequency: 5,
    //         dateInstalled: '2023-10-11T08:34:56.789Z',
    //         battery: '20%'
    //     },
    // ],),
    // createData(24, 'Sensor 1', 41.881832, -87.623177, 'rhino', 'link',
    //     [
    //         {
    //             img: 'https://picsum.photos/200/200?grayscale',
    //             timestamp: '2022-08-13T12:34:56.789Z',
    //             description: '11091702',
    //             frequency: 5,
    //             dateInstalled: '2020-08-11T12:34:56.789Z',
    //             battery: '20%'
    //         },
    //     ],),

    //     createData(25, 'Sensor 1', 41.881832, -87.623177, 'rhino', 'link',
    //     [
    //         {
    //             img: 'https://picsum.photos/200/200?grayscale',
    //             timestamp: '2022-08-13T12:34:56.789Z',
    //             description: '11091702',
    //             frequency: 5,
    //             dateInstalled: '2020-08-11T12:34:56.789Z',
    //             battery: '20%'
    //         },
    //     ],),
    //     createData(26, 'Sensor 1', 41.881832, -87.623177, 'rhino', 'link',
    //     [
    //         {
    //             img: 'https://picsum.photos/200/200?grayscale',
    //             timestamp: '2022-08-13T12:34:56.789Z',
    //             description: '11091702',
    //             frequency: 5,
    //             dateInstalled: '2020-08-11T12:34:56.789Z',
    //             battery: '20%'
    //         },
    //     ],),
];