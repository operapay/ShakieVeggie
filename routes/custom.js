const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const db = require('../config/database');


let User = require('../models/user');
let Formula = require('../models/formula');

router.get('/:id', function(req,res){
    Formula.findById(req.params.id, function(err,formula){
        res.render('custom', {
            formula:formula
        }); 
    });
});


router.post('/:id', function (req, res) {
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

router.post('/component',function(req,res){
    req.flash('success','Added order to cart');
    res.redirect('/formula');
});

router.get('/bottle_three',function(req,res){
    res.render('recommendThree');
});


module.exports = router;