var config = {
    style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoib2N0YXZpb3RhcmFuY29uIiwiYSI6ImNtaHQxbGE4MjFhb3gya3M0YWlwdzZud3oifQ.lMd9SnMmh6fM9Gytb4-hIQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Fuentes para beber en Sanchinarro - Madrid',
    subtitle: 'Storymaps del desarrollo de infraestructuras de apoyo a las actividades de ejercicio físico contemplado en Sanchinarro.',
    byline: 'Por O. Tarancón',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'fuente01',
            alignment: 'left',
            hidden: false,
            title: 'Fuente del Parque Vicente Blasco Ibánez',
            image: './assets/fuente01.jpg',
            description: 'Fuente situada en el Parque de Vicente Blasco Ibáñez, el cual es una zona de recreo en Hortaleza.',
            location: {
                center: [-3.6513652,40.5018199],
                zoom: 16.69,
                pitch: 67.50,
                bearing: -73.58
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'fuente02',
            alignment: 'right',
            hidden: false,
            title: 'Fuente de la Calle de María Tudor',
            image: './assets/fuente02.jpg',
            description: 'Fuente situada en un pequeño parque infantil.',
            location: {
                center: [
          -3.6564907,
          40.4985161
        ],
                zoom: 18.5,
                pitch: 68,
                bearing: 137.93,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fuente03',
            alignment: 'left',
            hidden: false,
            title: 'Fuente en la Calle de María Tudor 45',
            image: './assets/fuente03.jpg',
            description: 'Fuente situada en el Parque María Tudor, en su parte sur.',
            location: {
                center: [
          -3.6604199,
          40.4945969
        ],
                zoom: 18.81,
                pitch: 72.5,
                bearing: -140.27
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fuente04',
            alignment: 'right',
            hidden: false,
            title: 'Fuente en la Calle de María Tudor 12',
            image: './assets/fuente04.jpg',
            description: 'Fuente situado en la parte mas Sur del Parque de María Tudor, cercano a la cancha de balocesto.',
            location: {
                center: [
          -3.6612575,
          40.4941563
        ],
                zoom: 19.42,
                pitch: 67.50,
                bearing: -95.34
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fuente05',
            alignment: 'left',
            hidden: false,
            title: 'Fuente en Área Infantil',
            image: './assets/fuente05.jpg',
            description: 'Fuente situada en el área infantil de Calle Oña 81.',
            location: {
                center: [
          -3.6631656,
          40.488166
        ],
                zoom: 19.38,
                pitch: 77.38,
                bearing: -145.74
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fuente06',
            alignment: 'right',
            hidden: false,
            title: 'Fuente en Parque de la Constitución',
            image: './assets/fuente06.jpg',
            description: 'Fuente situada en Calle Oña 133, está actualmente fuera de servicio.',
            location: {
                center: [
          -3.6621975,
          40.4877972
        ],
                zoom: 19.79,
                pitch: 73.03,
                bearing: 98.92
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fuente07',
            alignment: 'left',
            hidden: false,
            title: 'Buenos Aires',
            image: './assets/fuente07.jpg',
            description: 'Fuente situada en el Parque de la plaza alcalde Moreno Torres.',
            location: {
                center: [
          -3.6581509,
          40.4856629
        ],
                zoom: 19.03,
                pitch: 67.53,
                bearing: 78.92
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fuente08',
            alignment: 'right',
            hidden: false,
            title: 'Buenos Aires',
            image: './assets/fuente08.jpg',
            description: 'Fuente situada en el Parque de la plaza alcalde Moreno Torres.',
            location: {
                center: [
          -3.6563292,
          40.4851875
        ],
                zoom: 19.03,
                pitch: 76.03,
                bearing: 113.32
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fuente09',
            alignment: 'left',
            hidden: false,
            title: 'Buenos Aires',
            image: './assets/fuente09.jpg',
            description: 'Fuente situada en el Parque de la plaza alcalde Moreno Torres.',
            location: {
                center: [
          -3.6552972,
          40.4852081
        ],
                zoom: 19.03,
                pitch: 71.05,
                bearing: 34.64
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fuente10',
            alignment: 'right',
            hidden: false,
            title: 'Buenos Aires',
            image: './assets/fuente10.jpg',
            description: 'Fuente situada en el Parque de la Torre.',
            location: {
                center: [
          -3.6519762,
          40.4893676
        ],
                zoom: 19.03,
                pitch: 72.61,
                bearing: 49.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fuente11',
            alignment: 'left',
            hidden: false,
            title: 'Buenos Aires',
            image: './assets/fuente11.jpg',
            description: 'Fuente situada en el Parque San Xinarro.',
            location: {
                center: [
          -3.6508546,
          40.4917237
        ],
                zoom: 17.57,
                pitch: 70.59,
                bearing: 12.90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fuente12',
            alignment: 'right',
            hidden: false,
            title: 'Buenos Aires',
            image: './assets/fuente12.jpg',
            description: 'Fuente situada en el Parque San Xinarro.',
            location: {
                center: [
          -3.6494608,
          40.4928036
        ],
                zoom: 18.06,
                pitch: 63.59,
                bearing: 116.05
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fuente13',
            alignment: 'left',
            hidden: false,
            title: 'Buenos Aires',
            image: './assets/fuente13.jpg',
            description: 'Fuente situada en el Parque de Alcalá Zamora.',
            location: {
                center: [
          -3.64715,
          40.492863
        ],
                zoom: 18.49,
                pitch: 70.59,
                bearing: -117.55
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fuente14',
            alignment: 'right',
            hidden: false,
            title: 'Buenos Aires',
            image: './assets/fuente14.jpg',
            description: 'Fuente situada en el Parque de Alcalá Zamora.',
            location: {
                center:  [
          -3.6453342,
          40.4880638
        ],
                zoom: 17.77,
                pitch: 40.78,
                bearing: -89.84
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fuente15',
            alignment: 'fully',
            hidden: false,
            title: 'Áreas con acceso limitados',
            image: './assets/fuentes_5.gif',
            description: 'Fuente situada en el Parque de Alcalá Zamora.',
            location: {
                center:  [
          -3.6453342,
          40.4880638
        ],
                zoom: 17.77,
                pitch: 40.78,
                bearing: -89.84
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
