const perro = {
    nombre: 'Firulais',
    edad: 5,
    comer: (comida) => {
        /* console.log('estoy comiendo'); */
        /*  return 'estoy comiendo' */
        return `El perro come ${comida}` //Asi se concatena correctamente 
    },
    habla: function () {
        return `soy un perro que habla y mi nombre es ${this.nombre}`
    },
    pruebaThis: () => {
        console.log(this);
    }
}
perro.nombre = 'Xolo'

/* console.log('texto cualquiera'.toUpperCase()); */
const array = [1, 2, 3, 4, 545]
/* array.push('pepe')
console.log(typeof perro.nombre); */

/* console.log(perro['edad'],perro.edad); */
perro.raza = 'Chihuahua'

/* console.log(perro.raza); */

class Gato {

    constructor(raza, vidas, nombre) {
        this.raza = raza;
        this.vidas = vidas;
        this.nombre = nombre;
    }
    volar() {
        return 'Estoy volando weeee'
    }
    habla() {
        this.nombre = 'Batman'
        return 'mi nombre es ${this}'
    }
}

const Michi = new Gato('Sagrado de birmania', 7, 'Snow Ball')

const snowBall = new Gato('Egipcio', 5, 'Snow Ball')

const Robin = new Gato()

/* console.log(snowBall.nombre); */

class Penguin {
    constructor(character, origin, creator, notes) {
        this.character = character;
        this.origin = origin;
        this.creator = creator;
        this.notes = notes;
    }
}

const myPenguin = new Penguin('Opus', 'Bloom, Country, Outland,Opus', 'Berkeley, Breathed', 'A penguin from the Falkland Islands. He is the most recognizable character from the franchise and was the star of many of its spin-offs')

/* console.log(`Hola, soy un pinguino, y mi nombre es ${myPenguin.character}` ); */

Penguin.puedovolar = 'falso'

/* console.log(Penguin.puedovolar); */

/* console.log(`Hola, soy un pinguino, y mi nombre es ${myPenguin.character} y puedo volar ${Penguin.puedovolar}`); */

class Cuenta {
    constructor(nombre, dinero) {
        this.titular = nombre
        this.saldo = dinero
    }

    ingresar(dinero) {

        if(this.saldo + dinero > 900){
            return 'Limite de saldo de la cuenta'
        }else{
            this.saldo += dinero; 
            return `Saldo actual es de ${this.saldo}`
        }
    }
    retirar(){
        if(this.saldo - dinero < 0){
            return 'Fondos insuficientes'
        }else{
            this.saldo -= dinero;
            return `Tu saldo es ahora de ${this.saldo}`
        }
    }
};
const eduardo = new Cuenta ('Eduardo', 700);
eduardo.ingresar(200)

console.log(eduardo.saldo);

eduardo.retirar(100)
eduardo.retirar(800)
eduardo.retirar(600)

console.log(eduardo.saldo);


