const request = require('request');

const buscaPokemon = new Promise ((resolve,rejected)=>{
    
    const url = 'https://pokeapi.co/api/v2/pokemon/mewtwo/'
    request.get(url,(error,response,body)=>{

        
        if(response.statusCode === 200){
            const json =JSON.parse(body)
            for ( i = 0; i < json.moves.lenght; i++) {
                console.log(json.moves[i].move.name);
            }
        }else if(response.statusCode === 400){
            console.log('Lo hiciste mal, intenta otra vez, menso');
        }else if(response.statusCode === 404){
            console.log(`${response.statusCode} Not Found`)
        }
    });
});

buscaPokemon
    .then((resolve)=> {
        console.log(resolve)
    })
    .catch((rejected)=>{
        console.log(rejected)
    })
    console.log(buscaPokemon)
    console.log('Hilo de ejecucion Principal');