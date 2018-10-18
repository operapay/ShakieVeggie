let mongoose = require('mongoose');

let recommendSchema = mongoose.Schema({
    formulaid:{
        type: String,
        required: true
    },
    ingredient1:{
        type: String,
        required: true
    },
    ingredient2:{
        type: String,
        required: true
    },
    ingredient3:{
        type: String,
        required: true
    }
});

let Recommend = module.exports = mongoose.model('Recommend', recommendSchema);