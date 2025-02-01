// Ejercicio 4 Map-filter

const datos = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos: [
            {id: 1, nombre:'Proyecto 1'},
            {id: 2, nombre:'Proyecto 2'}
        ]
    },
    {
        id: 2,
        nombre: 'Maria',
        habilidades: ['Python', 'SQL', 'Django'],
        proyectos: [
            {id: 3, nombre:'Proyecto 3'},
            {id: 4, nombre:'Proyecto 4'}
        ]
    },
    {
        id: 3,
        nombre: 'Pedro',
        habilidades: ['Java', 'Spring', 'Hibernate'],
        proyectos: [
            {id: 5, nombre:'Proyecto 5'},
            {id: 5, nombre:'Proyecto 6'}
        ]
    },
];

const getJsDev = (datos) => {
    const desarrolladoresJavascript = datos.filter(({ habilidades }) => habilidades.includes('JavaScript'))
    return desarrolladoresJavascript
};

console.log(getJsDev(datos))

const getProjects = (datos) => {
    const nombresProyectos = datos.map(dev => dev.proyectos.map(proyecto => proyecto.nombre))
    return nombresProyectos.flat()
};
    
console.log(getProjects(datos))
