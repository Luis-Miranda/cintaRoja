//media moda mediana 
/* var promedio = function  (a, b, c, d, e, f){
    console.log(a + b + c + d + e + f / 6);
};

var numeros = ordenSuperior

numeros.sort(oredenacao);
function oredenacao(a, b){
    return b - a; 
}

for (var i = 0 ; i < numeros.length; i++){
    document.write (numeros[i] + '<br>');
}
var mediana = function (a, b){
    console.log(a * b);
};

var ordenSuperior = function (a, b, c, d, e, f, parametroQueEsUnaFuncion){
    parametroQueEsUnaFuncion (a, b, c, d, e, f );
};

ordenSuperior(10, 8, 8, 8, 10, 7, promedio) */

const arr = [9,8,7,9,8,6,7,8,9,10,12,12]

const promediar = (calificaciones) =>{
 
};

const medianar = (calificaciones) =>{
    const sortedCalificaciones = calificaciones.sort((a,b) => {
        return a - b
    })
    const largo = sortedCalificaciones.length

    const mitadLargo = Math.floor(largo/2)

    if(largo % 2 === 0){
       const mitad1 = sortedCalificaciones[mitadLargo];

       const mitad2 = sortedCalificaciones[mitadLargo - 1]
       
       return (mitad1 + mitad2)/2

    }else{
        return sortedCalificaciones [mitadLargo]
    }
};

const ordenSuperior = (calificaciones, operacion) => {
    return operacion (calificaciones)
};


console.log(ordenSuperior(arr,medianar));