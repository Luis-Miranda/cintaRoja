const mongoose = require('mongoose');

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