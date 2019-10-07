const request = require('request');
/* 
const buscaAsteroides = new Promise ((res,rej)=>{
    
    const url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-10-02&end_date=2019-10-09&api_key=gKIbpePvOIvBTRBkaZEa86PqSMrE4SxqnblcX97X'
    request.get(url,(error,response,body) =>{

        if(response.statusCode === 200){
            const json = JSON.parse(body)
            console.log(json.near_earth_objects) */ /* is_potentially_hazardous_asteroid*/
/* 
        }else if(response.statusCode === 400){
            console.log('Lo hiciste mal, intenta otra vez, menso');
        }else if(response.statusCode === 404){
            console.log(`${response.statusCode} Not Found`);
        }
    })
})

buscaAsteroides
    .then((res) => {
    console.log(res);
})
    .catch((rej) =>{
    console.log(rej);
})
 */
request.get('http://127.0.0.1:6660/',(error,response,body)=>{
   console.log(JSON.parse(body).name)
})