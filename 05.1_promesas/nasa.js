const request = require('request');

    const NASA_URL = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-10-02&end_date=2019-10-09&api_key=gKIbpePvOIvBTRBkaZEa86PqSMrE4SxqnblcX97X'

    const tierraPrometida = new Promise((resolve,rejected)=>{
        request.get(NASA_URL,(error,response,body)=>{
            const newNEO = Object.values(JSON.parse(body).near_earth_objects).map((date)=>{
               return date.filter(asteroid =>{
                   return asteroid.is_potentially_hazardous_asteroid
               }) 
            })
            
            resolve (newNEO)
        })
    });

    tierraPrometida
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error))