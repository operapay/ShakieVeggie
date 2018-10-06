const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const db = require('../config/database');

//payment form
router.get('/',function(req,res){
    res.render('payment');
});

router.post('/',function(req,res){
    res.render('payment');
});

//tracking form
router.get('/tracking',function(req,res){
    res.render('testdisease');
});

router.post('/tracking',function(req,res){
    console.log('submit checkout');
});

module.exports = router;