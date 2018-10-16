let mongoose = require('mongoose');

//user schema
let NutrientSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    fruit1:{
        type: String,
        required: true
    },
    fruit2:{
        type: String,
        required: true
    },
    fruit3:{
        type: String,
        required: true
    },
    fruit4:{
        type: String,
        required: true
    },
    fruit5:{
        type: String,
        required: true
    },
    fruit6:{
        type: String,
        required: true
    }
});


let Nutrient = module.exports = mongoose.model('Nutrient', NutrientSchema);