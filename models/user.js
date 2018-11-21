let mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

//user schema
let UserSchema = mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    }
});

UserSchema.methods.generateHash = function (pwd) {
    return bcrypt.hashSync(pwd, bcrypt.genSaltSync(10), null)
}

let User = module.exports = mongoose.model('User', UserSchema);
