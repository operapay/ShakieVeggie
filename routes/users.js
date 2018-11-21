const express = require('express');
const router = express.Router();
const passport = require('passport');
const userCtrl = require('../controller/user-controller')
const config = require('../validation/user-validation')
const checkValidation = require('../validation/checkValidation')

//Register form
router.get('/register', function(req,res){
    res.render('register');
});

//register process
router.post('/register',config.signup,checkValidation,userCtrl.userSignup);

//login form
router.get('/login', function(req,res){
    res.render('login');
});

//login process
router.post('/login', function(req,res,next){
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req,res,next);
});

//logout
router.get('/logout',function(req,res){
    req.logout();
    req.flash('success','You are logged out');
    res.redirect('/users/login');
});

//check user
router.post('/pleaselogin',function(req,res){
    req.flash('danger','Please login');
    res.redirect('/users/login');
});

module.exports = router;