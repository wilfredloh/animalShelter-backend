const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    species: {
        type: String,
        require: true
    },
    breed: {
        type: String,
        require: true
    },
    sex: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    adopted: {
        type: Boolean,
        require: true
    }
})

const Animal = mongoose.model('Animal', AnimalSchema)
module.exports = Animal