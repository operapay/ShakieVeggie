const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const db = require('../config/database');

//payment form
router.get('/',function(req,res){
    res.render('payment');
});

router.post('/checkout',function(req,res){
    req.flash('success','order in system');
    res.redirect('/payment/tracking');    
    //res.render('track');
});

//tracking form
router.get('/tracking',function(req,res){
    res.render('tracking');
});

router.post('/tracking',function(req,res){
    console.log('submit checkout');
});

module.exports = router;