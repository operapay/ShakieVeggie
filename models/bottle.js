let mongoose = require('mongoose');

//user schema
let BottleSchema = mongoose.Schema({
    formulaid:{
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
    amount:{
        type: String,
        required: true
    }
});


let Bottle = module.exports = mongoose.model('Bottle', BottleSchema);