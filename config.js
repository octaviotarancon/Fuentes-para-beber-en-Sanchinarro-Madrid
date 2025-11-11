var config = {
    style: 'mapbox://styles/mapbox/streets-v12',
    // style: 'mapbox://styles/octaviotarancon/cmhkdy0ij002u01qrei2d2evx',
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
    subtitle: 'Storymaps del catálogo de fuentes para beber dentro del circuito de actividades de ejercicio físico en Sanchinarro.',
    byline: 'Por O. Tarancón',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'fuente01',
            alignment: 'left',
            hidden: false,
            title: 'Fuente del Parque Vicente Blasco Ibánez',
            image: './assets/fuente01.jpg',
            description: 'En el Parque de Vicente Blasco Ibáñez (Sanchinarro) se pueden realizar principalmente actividades de ejercicio físico al aire libre como caminar, correr, ciclismo, patinaje y entrenamiento funcional en las zonas de paseo y explanadas. Además, se organizan actividades vecinales y deportivas puntuales, y en las inmediaciones está el Centro Deportivo El Valle, que amplía la oferta con deportes de sala y pista.',
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
            title: 'Fuente en parque infantil de la Calle de María Tudor',
            image: './assets/fuente02.jpg',
            description: 'El parque infantil en la esquina de María Tudor con la avenida de Niceto Alcalá Zamora en Sanchinarro está diseñado como un área inclusiva y amplia, donde además de juegos infantiles se pueden realizar actividades físicas ligeras y de coordinación, tanto para niños como para adultos que acompañan.',
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
            description: 'El Parque de Sanchinarro Jorge Arguelles, situado en la calle María Tudor, es un espacio verde abierto las 24 horas que ofrece múltiples posibilidades para la práctica de ejercicio físico al aire libre.',
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
            description: 'El conjunto de parques en torno a María Tudor forma un circuito natural de actividad física dentro de Sanchinarro. Los vecinos lo utilizan para deporte libre, actividades familiares y encuentros comunitarios, convirtiéndolo en un eje de vida saludable en el distrito de Hortaleza.',
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
            description: 'Este parque infantil no solo es un lugar de ocio, sino también un entorno de ejercicio físico temprano, donde los niños desarrollan habilidades motoras y sociales. Al estar junto a servicios básicos del barrio, se convierte en un espacio de convivencia y actividad saludable para familias y vecinos de Hortaleza.',
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
            title: 'Fuente en Área infantil en Av. Manoteras 49',
            image: './assets/fuente06.jpg',
            description: 'El Área infantil «Manoteras, 49» es un espacio pensado para el juego activo de los niños, donde las actividades físicas se centran en la coordinación, la fuerza y la agilidad a través de juegos seguros y dinámicos.',
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
            title: 'Primera fuente en Parque Sanchinarro',
            image: './assets/fuente07.jpg',
            description: 'El Parque de Sanchinarro es un espacio verde abierto las 24 horas que se ha convertido en un punto clave para la práctica de ejercicio físico en el barrio. Sus caminos, explanadas y zonas infantiles permiten actividades tanto individuales como colectivas, desde running y ciclismo hasta juegos activos para niños.',
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
            title: 'Segunda fuente en Parque Sanchinarro',
            image: './assets/fuente08.jpg',
            description: 'El parque se encuentra cerca de instalaciones deportivas y centros culturales de Sanchinarro, lo que amplía la oferta de actividades físicas con cursos, talleres y deportes organizados. Se organizan actividades vecinales como rutas en bici, encuentros deportivos y eventos culturales que integran ejercicio físico con convivencia social.',
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
            title: 'Tercera fuente en Parque Sanchinarro',
            image: './assets/fuente09.jpg',
            description: 'El Parque de Sanchinarro no es solo un espacio de ocio, sino un verdadero corredor de actividad física dentro del distrito de Hortaleza. Su carácter abierto y lineal lo convierte en un lugar versátil: sirve para deporte libre, actividades familiares y encuentros comunitarios, consolidándose como un eje de vida saludable en el norte de Madrid.',
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
            title: 'Fuente situada en el Parque de la Torre',
            image: './assets/fuente10.jpg',
            description: 'El Parque De La Torre es un punto de encuentro vecinal en Sanchinarro. Su carácter abierto y accesible lo convierte en un espacio versátil: sirve para deporte libre, actividades familiares y encuentros comunitarios, consolidándose como un eje de vida saludable en el norte de Madrid.',
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
            title: 'Fuente en el Parque Sanchinarro - Isabel Clara Eugenia 31',
            image: './assets/fuente11.jpg',
            description: 'El parque infantil situado en la calle Isabel Clara Eugenia 31 de Hortaleza, es un espacio de proximidad pensado para el juego activo y la convivencia vecinal, donde los niños desarrollan habilidades físicas como fuerza, coordinación, equilibrio y agilidad a través de columpios, toboganes, estructuras de trepa y zonas de carrera, mientras que los adultos lo aprovechan para caminar, estirar o realizar ejercicio ligero mientras supervisan; en conjunto, aunque no es un gran parque deportivo, cumple una función esencial como entorno de actividad física temprana y hábitos saludables, reforzando la vida comunitaria del barrio.',
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
            title: 'Fuente en el Parque infantil de calistenia en Av. del Ingeniero Emilio Herrera, 20',
            image: './assets/fuente12.jpg',
            description: 'El parque de Sanchinarro es un espacio al aire libre orientado principalmente a la calistenia y el entrenamiento funcional, con barras, espalderas y estructuras que permiten trabajar fuerza, resistencia y coordinación; además, sus caminos y explanadas se aprovechan para correr, caminar o realizar calentamientos, y aunque está pensado sobre todo para jóvenes y adultos, también los niños pueden usar algunas zonas de trepa y balanceo, convirtiéndolo en un punto de encuentro vecinal que fomenta hábitos saludables y la práctica deportiva gratuita en el barrio.',
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
            title: 'Fuente situada en un tramo del Parque Vicente Blasco Ibáñez en Sanchinarro',
            image: './assets/fuente13.jpg',
            description: 'El parque funciona principalmente como una zona de descanso y apoyo para ciclistas y peatones, más que como un parque infantil o deportivo, y en cuanto a ejercicio físico su papel es complementar la práctica de ciclismo, la marcha y el running al ofrecer un espacio para parar, hidratarse, estirar y recuperar antes de continuar la ruta, convirtiéndose en un punto útil dentro de la red de movilidad activa y saludable del barrio.',
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
            title: 'Fuente situada en otro tramo del Parque Vicente Blasco Ibáñez en Sanchinarro',
            image: './assets/fuente14.jpg',
            description: 'Tramo del Parque Vicente Blasco Ibáñez en Sanchinarro, espacio lineal que se percibe como dividido por las calles pero que en realidad forma parte de un único corredor verde, y en cuanto a ejercicio físico es muy utilizado para correr, caminar, montar en bici o patinar, además de contar con zonas infantiles que fomentan la coordinación, el equilibrio y la fuerza en los más pequeños, convirtiéndose en un punto clave de convivencia vecinal y promoción de hábitos saludables en Hortaleza.',
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
            title: 'Cobertura de fuentes de agua en Sanchinarro: círculos de accesibilidad en 5 minutos',
            image: './assets/fuentes_5.gif',
            description: 'El GIF animado muestra la localización de las 14 fuentes de agua potable en los barrios de Sanchinarro y Virgen del Cortijo, representadas con un icono de grifo y rodeadas por circunferencias de 420 metros, equivalentes a cinco minutos andando a paso normal. Con esta visualización se pretende analizar la cobertura real de este servicio básico y detectar las áreas que quedan fuera de acceso inmediato, lo que permite observar de manera clara los vacíos existentes en la red de fuentes. El resultado es relevante porque evidencia cómo la ubicación de las fuentes influye directamente en la práctica de actividades físicas y en el uso cotidiano de los parques y espacios públicos. Al identificar las zonas sin cobertura, se pone de manifiesto la necesidad de mejorar la distribución de este recurso para garantizar que deportistas, familias y usuarios ocasionales dispongan de un acceso equitativo al agua, reforzando así la salud, la comodidad y la sostenibilidad de la vida comunitaria en el barrio.',
            location: {
                center:  [
          -3.6453342,
          40.4880638
        ],
                zoom: 15.38,
                pitch: 52.78,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
