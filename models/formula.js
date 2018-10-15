let mongoose = require('mongoose');

//user schema
let FormulaSchema = mongoose.Schema({
    formulaname:{
        type: String,
        required: true
    },
    component1:{
        type: String,
        required: true
    },
    component2:{
        type: String,
        required: true
    },
    component3:{
        type: String,
        required: true
    }
});


let Formula = module.exports = mongoose.model('Formula', FormulaSchema);