const express = require ('express');
const bodyParser = require ('body-parser');

const {Pelicula} = require('./peliculas')

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const PORT = 4000;


app.get('/', (req,res)=>{
    res.send({message: 'Sever On' })
})

app.post('/create/movie', (req,res) =>{
    const {
        title,
        year,
        clasification,
        synopsis, 
        duration, 
        genre, 
        cover_img, 
        directores
    } = req.body

    const newMovie = Pelicula({
        title,
        year,
        clasification,
        synopsis, 
        duration, 
        genre, 
        cover_img, 
        directores
    });

    newMovie.save((err, documentoPelicula)=>{
        err
        ? res.status(400).send(err)
        : res.status(201).send({message: ' Has publicado una nueva pelicula',pelicula: documentoPelicula})
    })
});

app.listen(PORT, () => {
    console.log( `Server inicializado en el puerto ${PORT}`);
});