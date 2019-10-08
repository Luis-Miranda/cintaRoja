const mongoose = require('mongoose');

const URL_MONGO = "mongodb+srv://Luis:1423@cluster0-picjy.mongodb.net/peliculas?retryWrites=true&w=majority";

mongoose.connect(URL_MONGO, { useUnifiedTopology: true }, (error) => {
    if (!error) {
        console.log('Conexion exitosa con MongoDB')
    } else {
        console.log(error);
    }
})

const Schema = mongoose.Schema;

const peliSchema = new Schema({
    title: String,
    year: String,
    classification: String,
    synopsis: {
        type: String
    },
    duration: {
        type: Number,
        default: 90
    },
    genre: {
        type: String,
        enum: ['HR', 'AC', 'CD', 'SF'],
        required: true
    },
    cover_img: [String],
    directores: {
        type: [{
            name: String,
            edad: {
                type: Number,
                default: 18
            }
        }]
    }

}, {timestamps:true});

const Pelicula = mongoose.model('Peliculas', peliSchema);


module.exports = {
    Pelicula
}