const images = [
    [
        [
            {
                image: './assets/images/food/ff1.jpg',
                selected: false,
                value: 1
            },
            {
                image: './assets/images/food/ff2.jpg',
                selected: false,
                value: 1
            },
            {
                image: './assets/images/food/bs1.jpg',
                selected: false,
                value: 2
            },
            {
                image: './assets/images/food/bs2.jpg',
                selected: false,
                value: 2
            },
            {
                image: './assets/images/food/sd1.jpg',
                selected: false,
                value: 3

            },
            {
                image: './assets/images/food/sd2.jpg',
                selected: false,
                value: 3
            }
        ],
        [
            {
                image: './assets/images/flowers/avg1.jpg',
                selected: false,
                value: 2
            },
            {
                image: './assets/images/flowers/avg2.jpg',
                selected: false,
                value: 2
            },
            {
                image: './assets/images/flowers/min1.jpg',
                selected: false,
                value: 1
            },
            {
                image: './assets/images/flowers/min2.jpg',
                selected: false,
                value: 1
            },
            {
                image: './assets/images/flowers/op1.jpg',
                selected: false,
                value: 3
            },
            {
                image: './assets/images/flowers/op2.jpg',
                selected: false,
                value: 3
            },
        ],
        [
            {
                image: './assets/images/music/band1.jpg',
                selected: false,
                value: 2
            },
            {
                image: './assets/images/music/band2.jpg',
                selected: false,
                value: 2
            },
            {
                image: './assets/images/music/dj1.jpg',
                selected: false,
                value: 1
            },
            {
                image: './assets/images/music/dj2.jpg',
                selected: false,
                value: 1
            },
            {
                image: './assets/images/music/orch1.jpg',
                selected: false,
                value: 3
            },
            {
                image: './assets/images/music/orch2.jpg',
                selected: false,
                value: 3
            },
        ],
        [
            {
                image: './assets/images/alcohol/serv1.jpg',
                selected: false,
                value: 2
            },
            {
                image: './assets/images/alcohol/serv2.jpg',
                selected: false,
                value: 2
            },
            {
                image: './assets/images/alcohol/serv3.jpg',
                selected: false,
                value: 2
            },
            {
                image: './assets/images/alcohol/bar1.jpg',
                selected: false,
                value: 3
            },
            {
                image: './assets/images/alcohol/bar2.jpg',
                selected: false,
                value: 3
            },
            {
                image: './assets/images/alcohol/bar3.jpg',
                selected: false,
                value: 3
            },
        ],
        [
            {
                image: './assets/images/attendance/small1.jpg',
                selected: false,
                value: 1
            },
            {
                image: './assets/images/attendance/small2.jpg',
                selected: false,
                value: 1
            },
            {
                image: './assets/images/attendance/medium1.jpg',
                selected: false,
                value: 2
            },
            {
                image: './assets/images/attendance/medium2.jpg',
                selected: false,
                value: 2
            },
            {
                image: './assets/images/attendance/large1.jpg',
                selected: false,
                value: 3
            },
            {
                image: './assets/images/attendance/large2.jpg',
                selected: false,
                value: 3
            },
        ],
        [
            {
                image: './assets/images/photo/disp1.jpg',
                selected: false,
                value: 1
            },
            {
                image: './assets/images/photo/disp2.jpg',
                selected: false,
                value: 1
            },
            {
                image: './assets/images/photo/photo1.jpg',
                selected: false,
                value: 2
            },
            {
                image: './assets/images/photo/photo2.jpg',
                selected: false,
                value: 2
            },
            {
                image: './assets/images/photo/video1.jpg',
                selected: false,
                value: 3
            },
            {
                image: './assets/images/photo/video2.jpg',
                selected: false,
                value: 3
            },
        ],
        [
            {
                image: './assets/images/season/winter1.jpg',
                selected: false,
                value: 1
            },
            {
                image: './assets/images/season/summer1.jpg',
                selected: false,
                value: 3
            },
            {
                image: './assets/images/season/spring1.jpg',
                selected: false,
                value: 2
            },
            {
                image: './assets/images/season/spring2.jpg',
                selected: false,
                value: 2
            },
            {
                image: './assets/images/season/autumn1.jpg',
                selected: false,
                value: 4
            },
            {
                image: './assets/images/season/autumn2.jpg',
                selected: false,
                value: 4
            },
        ],
        [
            {
                image: './assets/images/reception/indoor1.jpg',
                selected: false,
                value: 1
            },
            {
                image: './assets/images/reception/indoor2.jpg',
                selected: false,
                value: 1
            },
            {
                image: './assets/images/reception/indoor3.jpg',
                selected: false,
                value: 1
            },
            {
                image: './assets/images/reception/outdoor1.jpg',
                selected: false,
                value: 2
            },
            {
                image: './assets/images/reception/outdoor2.jpg',
                selected: false,
                value: 2
            },
            {
                image: './assets/images/reception/outdoor3.jpg',
                selected: false,
                value: 2
            },
        ],
        [
            {
                image: './assets/images/ceremony/indoor1.jpg',
                selected: false,
                value: 1
            },
            {
                image: './assets/images/ceremony/indoor2.jpg',
                selected: false,
                value: 1
            },
            {
                image: './assets/images/ceremony/indoor3.jpg',
                selected: false,
                value: 1
            },
            {
                image: './assets/images/ceremony/outdoor1.jpg',
                selected: false,
                value: 2
            },
            {
                image: './assets/images/ceremony/outdoor2.jpg',
                selected: false,
                value: 2
            },
            {
                image: './assets/images/ceremony/outdoor3.jpg',
                selected: false,
                value: 2
            },
        ],
        [
            {
                image: './assets/images/vibe/slow1.jpg',
                selected: false,
                value: 1
            },
            {
                image: './assets/images/vibe/slow2.jpg',
                selected: false,
                value: 1
            },
            {
                image: './assets/images/vibe/ok1.jpg',
                selected: false,
                value: 2
            },
            {
                image: './assets/images/vibe/ok2.jpg',
                selected: false,
                value: 2
            },
            {
                image: './assets/images/vibe/hype1.jpg',
                selected: false,
                value: 3
            },
            {
                image: './assets/images/vibe/hype2.jpg',
                selected: false,
                value: 3
            },
        ],
    ],
    [
        'food', 'flowers', 'music', 'alcohol', 'attendance', 'photography', 'time_of_year', 'venue_reception', 'venue_ceremony',
        'reception_vibe', 'cost'
    ]
];

export default images;
