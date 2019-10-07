var suma = function  (a, b){
    console.log(a + b);
};

var resta = function (a, b){
    console.log(a - b);
};

var multiplicacion = function (a, b){
    console.log(a * b);
};

var division = function (a, b){
    console.log(a / b);
};

var ordenSuperior = function (a, b, parametroQueEsUnaFuncion){
    parametroQueEsUnaFuncion (a, b);
};

ordenSuperior(27, 50, suma)