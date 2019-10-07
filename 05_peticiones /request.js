const request = require ('request');

const URL_BASE = 'https://pokeapi.co/api/v2/'

/* request.get('https://pokeapi.co/api/v2/pokemon/ditto/',(error,response,body) => {
    const json = JSON.parse(body)
    console.log(json.name);
}); */

/* const pokeById = (id) => {
   const url = `${URL_BASE}/pokemon/${id}` 

    request.get(url,(error,response,body)=>{
       if (response.statusCode === 200){
           const json = JSON.parse(body)
           console.log(json);
       }else if(response.statusCode === 400){
           console.log('Lo hiciste mal, intentalo otra vez, menso');
       }else if (response.statusCode === 404){
           console.log(`${response.statusCode} Not Found`);
       }
    })
};

pokeById(150) */

const getPokeMovesById = (move_learn_method) =>{
    const url = `${URL_BASE}/pokemon/${move_learn_method}`
    request.get(url,(error,response,body)=>{
        if (response.statusCode === 200){
            const json = JSON.parse(body)
            for( i=0; i< json.moves.length; i++){
                console.log(json.moves[i].move.name);
            }
        }else if(response.statusCode === 400){
            console.log('Lo hiciste mal, intentalo otra vez, menso');
        }else if (response.statusCode === 404){
            console.log(`${response.statusCode} Not Found`);
        }
    })
}


getPokeMovesById(150)