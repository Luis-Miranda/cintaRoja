const mongoose = require('mongoose');
const express = require('express')
const app = express();

const models = require ('./src/models/')

const URL_MONGO = "mongodb+srv://Luis:1423@cluster0-picjy.mongodb.net/peliculas?retryWrites=true&w=majority";

mongoose.connect(URL_MONGO, { useUnifiedTopology: true }, (error) => {
    if (!error) {
        console.log('Conexion exitosa con MongoDB')
    } else {
        console.log(error);
    }
})


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.get('/', (req,res)=>{
    res.send({message: 'Sever On' })
})

app.listen(PORT, () => {
    console.log( `Server inicializado en el puerto ${PORT}`);
});

