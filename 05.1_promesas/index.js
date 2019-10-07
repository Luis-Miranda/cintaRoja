const request = require ('request');

// Promesa se divide en Niveles 
// Pending
// Resolved
// Rejected 

/* const promesa = new Promise((resolved,rejected)=>{
    const meTratoBien = true;
    if(meTratoBien === false){
       resolved();
    }else{
        rejected();
    }
});

promesa
    .then(()=>{
        console.log('Tengo celular nuevo :)');
    })
    .catch(()=>{
        console.log('A veces la vida no es como queremos');
    }) */

//Cliente 
//Usuario Password //El cliente pide un recurso 

// HTTP //Se realiza la petición 

// Servidor //El servidor envia una respuesta
// Rspuesta 

const buscaPokemon = new Promise((resolve,rejected) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/pikachu/'
    request.get(url, (error, response,body)=>{
        const json = JSON.parse(body);
        response.statusCode === 200 
        ? resolve(json.name) 
        : rejected(error)

    })
});

buscaPokemon
    .then((resolve)=>{
        console.log(resolve)
    })
    .catch((rejected)=>{
        console.log(rejected)
    });

/* console.log(buscaPokemon.then((resolve)=>{
    return resolve; 
}))
    .catch((rejected)=>{
    return rejected
}) */

/* console.log(buscaPokemon.then((resolve) => {
    return resolve;
})
.catch((rejected) => {
    return rejected;
})) */
console.log('Hilo de ejecución principal')


