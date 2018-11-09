let mongoose = require('mongoose');

//disease schema
let DiseaseSchema = mongoose.Schema({
    kidney:{
        type: Boolean,
        required: true
    },
    liver:{
        type: Boolean,
        required: true
    },
    hypertension:{
        type: Boolean,
        required: true
    },
    diabetes:{
        type: Boolean,
        required: true
    },
    pregnant:{
        type: Boolean,
        required: true
    },
    surgery:{
        type: Boolean,
        required: true
    }
});


let Disease = module.exports = mongoose.model('Disease', DiseaseSchema);