export const ITEMS = [
    {
        name: "Dashboard",
        icon: "fas fa-th-large",
        id: 1,
        items: [
            {
                name: "Estadisticas",
                pathname: "/dashboard"

            },
            { name:" Administrador de Usuarios",
              pathname: "/Users"

            }
        ],
       
    },
    {
        name: "Convocatoria",
        icon: "fab fa-connectdevelop",
        id: 2,
        items: [
            {
                name: "Administrar Pruebas Técnicas",
                pathname: "/prueba",
            },],
        pathname: "/convocatoria",
    },
    {
        name: "Aspirantes",
        icon: "far fa-user",
        id: 3,
        items: [
            {
                name: "Lista de espera",
                pathname: "/waiting-list",
            },
        ],
        pathname: "/InfoAspirants",
    },

    {
        name: "Citación",
        icon: "fas fa-map-marker-alt",
        id: 4,
        items: [
            {
                name: "Consolidado Postulantes",
                pathname: "/citation",
            },
            {
                name: "Dias de Entrevista",
                pathname: "/dia-de-entrevista",
            },
        ],
    },
    {
        name: "Calificaciones",
        icon: "fas fa-map-marker-alt",
        id: 5,
        items: [
            {
                name: "SoloLearn",
                pathname: "/",

            },
            {
                name: "Carta de Motivacion",
                pathname: "/",
            },
            {
                name: "Prueba Tecnica",
                pathname: "/",
            },


            {
                name: "Entrevista",
                pathname: "/",
            },
            {
                name: "Assesment",
                pathname: "/",
            },
        ],
    },
];
export const ITEMS_ASPIRANTS = [
    {
        name: "Dashboard de progreso",
        icon: "fas fa-th-large",
        items: [],
        pathname: "/dashboard",
        id: 7,
    },

    {
        name: "Agenda de Entrevista y assessment",
        icon: "fas fa-map-marker-alt",
        items: [],
        pathname: "/entrevista",
        id: 9,
    },
    {
        name: "Prueba Técnica",
        icon: "fas fa-laptop-code",
        items: [],
        pathname: "/aspirante",
        id: 10,
    },
];

export const CONVOCATORY = [
    {
        id: "618af60371d0ac754e708e31",
        name: "Programate",
        initialDate: "",
        finalDate: "",
        program: "Goyn",
        maxQuotas: 23,
        initialBootcampDate: "",
        finalBootcampDate: "",
        parameterization: {
            personalProfile: 20,
            sololearn: 234567,
            motivationLetter: 2345,
        },
        residenceCountry: "",
        residencyDepartment: "",
        maxAge: 18,
        maxSocioeconomicStratus: 4,
        test: {},
        usersRegisted: ["618e8a293dbcd0c5c40124dc"],
        test: {},
        status: true,
    },
    {
        id: "618c39993a9cca7088b85e05",
        name: "Programate 2.0",
        initialDate: "",
        finalDate: "",
        program: "Regional",
        maxQuotas: 50,
        initialBootcampDate: "",
        finalBootcampDate: "",
        parameterization: {
            personalProfile: 20,
            sololearn: 234567,
            motivationLetter: 2345,
        },
        residenceCountry: "",
        residencyDepartment: "",
        maxAge: 18,
        maxSocioeconomicStratus: 3,
        test: {},
        usersRegisted: [
            "618c352d3ad3f3933bfb3b59",
            "618e8a293dbcd0c5c40124dc",
            "6189bb71cf8fc583a3800001",
            "618e8a413dbcd0c5c40124dd",
            "618e8a4f3dbcd0c5c40124de",
        ],
        test: {},
        status: true,
    },
];
