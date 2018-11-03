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
        type: Number,
        required: true
    },
    paymentstatus:{
        type: String,
        required: true
    },
    mixingstatus:{
        type: String
    }, 
    trackingnum:{
        type: String
    },
    clearpayment:{
        type: String
    },
    clearmixing:{
        type: String
    }, 
    clearsending:{
        type: String
    }      
});


let Order = module.exports = mongoose.model('Order', OrderSchema);