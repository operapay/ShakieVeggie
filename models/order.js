let mongoose = require('mongoose');

//user schema
let OrderSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    name:{
        type: String,
    },
    address:{
        type: String,
        required: true
    },
    address2:{
        type: String,
    },
    country:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    zip:{
        type: Number,
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
    },
    checkout:{
        type: String
    }
});


let Order = module.exports = mongoose.model('Order', OrderSchema);