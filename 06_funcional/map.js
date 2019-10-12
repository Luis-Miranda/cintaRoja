const alumnos = [{
                    name:'Maritoni',
                    calif:10
                },
                {
                    name:'Wuicho',
                    calif:8
                },
                {
                    name:'Luis',
                    calif:5
                },
                {
                    name:'David',
                    calif:8
                },
                {
                    name:'Alan',
                    calif:7
                }]

/* const alumnosMasMas = alumnos.map(alumno => alumno.calif + 1); */ //Esta es una forma
/* const alumnosMasMas = alumnos.map(alumno => {
    alumno.calif++
    return alumno
}); */ // Esta es otra forma 


const subirPunto = (array) =>{
    return array.map(alumnoide =>{
        return {alumno:alumnoide.name,calif:alumnoide.calif++}
    })
    
}

/* 
console.log(subirPunto(alumnos));

console.log(alumnos); */


const lista2 = [{id:1,name:'Perro'},{id:2,name:'Gato'},{id:3,name:'Caballo'},{id:4,name:'Burro'}]

const nombres = (array) =>{
    return array.map(animal.name)
};

const menos5letras = (array) => {
    return array.filter(animal => animal.name.lenght < 5)
}

console.log(menos5letras (lista2));

/* 
const mascotas = [
    {    especie: "Hamster"},
    {  especie: "Perro"},
    {   especie: "Perro"},
    {  especie: "Gato" },
    {  especie: "Perico" }
];

let nombresMascotas = mascotas.map( mascota => {
    return mascota.nombre;
}); */