//const passport = require('passport');
let User = require('../models/user');
//const Tour = require('../models/tour-models');
//const Booking = require('../models/booking-models');
const {HandingErorr} = require('./handingError')
exports.userSignup = async (req, res, next) => {
    try {
        const {
            firstname,
            lastname,
            email,
            phone,
            username,
            password,
        } = req.body;

        const user = await User.find({ username: username });
        //const useremail = await User.find({ email: email });

        if (user.length >= 1) {
            req.flash('danger','Username is already exits');
            res.redirect('/users/register');
        }
        else{
            const newUser = new User();

            newUser.firstname = firstname;
            newUser.lastname = lastname;
            newUser.email = email;
            newUser.phone = phone;
            newUser.username = username;
            newUser.password = newUser.generateHash(password);
            newUser.save();
            req.flash('success','You are now registered and can login');
            res.redirect('/users/login');
        }
    }
    catch (e) {
        HandingErorr(res, e)
    }
}