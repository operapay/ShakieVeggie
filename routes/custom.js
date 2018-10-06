const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const db = require('../config/database');

//Bring in disease model
let Disease = require('../models/disease');

//disease filter form
router.get('/',function(req,res){
    res.render('custom');
});

router.post('/', function (req, res) {
    //res.json(req.body);
    if(req.body.kidney){
        console.log('kidney');
    }
    if(req.body.liver){
        console.log('liver');
    }
    if(req.body.hypertension){
        console.log('hypertension');
    }
    if(req.body.diabetes){
        console.log('diabetes');
    }
    if(req.body.pregnant){
        console.log('pregnant');
    }
    if(req.body.surgery){
        console.log('surgery');
    }
});

router.get('/cart',function(req,res){
    res.render('cart');
});

router.get('/component',function(req,res){
    res.render('testdisease');
});

router.post('/component',function(req,res){
    console.log('submit');
});


module.exports = router;