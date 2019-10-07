class Maestro{
    constructor(nombre, workplace){
        this.nombre = nombre;
        this.workplace = workplace;
    }

    promediar(...array){
        let promediados = 0;
        array.forEach( argumento => {
            promediados += argumento
        })


        return promediados / array.length;
    }
}

class MaestroMusica extends Maestro{
    constructor (nombre, workplace, instrumento){
        super(nombre, workplace)
        this.instrumento = instrumento;
    }
}

const miguel = new MaestroMusica ('Miguel', 'Instituto de Música', 'Clarinete')

console.log(miguel.promediar([5, 6, 8, 9, 7, 10]) );

class MaestroFisica extends Maestro{
    constructor(nombre, workplace, laboratorio){
        super(nombre, workplace)
        this.laboratorio = laboratorio;
    }
}

const roberto = new MaestroFisica ('Roberto', 'CCH', 'Laboratorio Fisica' )

/* console.log(roberto.workplace); */