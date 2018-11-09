const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const db = require('../config/database');
const LocalStrategy = require('passport-local').Strategy;

//Bring in User model
let User = require('../models/user');

//Register form
router.get('/register', function(req,res){
    res.render('register');
});

//register process
router.post('/register', function(req,res,done){
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phone = req.body.phone;
    const username = req.body.username;
    const password = req.body.password;
    const password2 = req.body.password2;

    req.checkBody('firstname','Firstname is required').notEmpty();
    req.checkBody('lastname','Lastname is required').notEmpty();
    req.checkBody('email','Email is required').notEmpty();
    req.checkBody('email','Email is not valid').isEmail();
    req.checkBody('phone','Phone is required').notEmpty();
    req.checkBody('username','Username is required').notEmpty();
    req.checkBody('password','Password is required').notEmpty();
    req.checkBody('password2','Password do not match').equals(req.body.password);


    let errors = req.validationErrors();
    //let check = req.username();

    if(errors){
        res.render('register',{
            errors:errors
        });
    }
    else{
        let newUser = new User({
            firstname:firstname,
            lastname:lastname,
            email:email,
            phone:phone,
            username:username,
            password:password
        });

        User.findOne({username: username}, function(err,user) {
            if (user) {
                req.flash('danger','Username Already Exists');
                res.redirect('/users/register');
            }
            else{
                bcrypt.genSalt(10, function(err,salt){
                    bcrypt.hash(newUser.password,salt,function(err,hash){
                        if(err){
                            console.log(err);
                        }
                        newUser.password = hash;
                        newUser.save(function(err){
                            if(err){
                                console.log(err);
                                return;
                            }
                            else{
                                req.flash('success','You are now registered and can login');
                                res.redirect('/users/login');
                            }
                        });
                    });
                });
            }
        });
    }
    
});

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

router.post('/pleaselogin',function(req,res){
    req.flash('danger','Please login');
    res.redirect('/users/login');
});

module.exports = router;