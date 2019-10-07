/* const mayorQueDosHoras = (horas, callback) => {
    return callback(horas);
}

function compararHoras(horas) {

    let nuevoHoras = [];

    for (let i = 0; i < horas.length; i++) {

        if (horas[i] >= 120) {
            nuevoHoras.push(horas[i]);
        }
    }

    return nuevoHoras;
}

const arregloFinal = mayorQueDosHoras([300, 120, 100, 50, 10, 150], compararHoras);
 */

const esMayorDosHoras = (horas) => {
    horas.forEach(minutos => {
       if (minutos > 120){
           console.log(minutos);
       }
    });
};

 const ordenSuperior = (...horas) => {
    return esMayorDosHoras (horas)
 };

 console.log(ordenSuperior(120,140,160,90,60,40,120));