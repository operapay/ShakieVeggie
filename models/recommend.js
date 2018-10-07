let mongoose = require('mongoose');

let recommendSchema = mongoose.Schema({
    no:{
        type: Number,
        required: true
    },
    formula:{
        type: String,
        required: true
    },
    ingreOne:{
        type: String,
        required: true
    },
    ingreTwo:{
        type: String,
        required: true
    },
    ingreThree:{
        type: String,
        required: true
    }
});

let Recommend = module.exports = mongoose.model('Recommend', recommendSchema);