let mongoose = require('mongoose');

//user schema
let OrderSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    totalprice:{
        type: String,
        required: true
    },
    paymentstatus:{
        type: String,
        required: true
    }    
});


let Order = module.exports = mongoose.model('Order', OrderSchema);