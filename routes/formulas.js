const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const db = require('../config/database');

let Formula = require('../models/formula');
let Nutrient = require('../models/nutrient');
let Bottle = require('../models/bottle');
let Order = require('../models/order');

router.get('/:id',function(req,res){
    Order.findById(req.params.id, function(err,orders){
        Formula.find({},function(err,formulas){
            res.render('formula',{
                title:'formulas',
                formulas:formulas,
                orders:orders
            });
        });
    });
});

router.get('/addbottle',function(req,res){
    res.render('add_bottle', {
        title:'Add Bottle'
    });
});

router.post('/addbottle',function(req,res){
    let bottle = new Bottle();
    bottle.formulaid = req.body.formulaid;
    bottle.fruit1 = req.body.fruit1;
    bottle.fruit2 = req.body.fruit2;
    bottle.fruit3 = req.body.fruit3;
    bottle.amount = req.body.amount;

    bottle.save(function(err){
        if(err){
            console.log(err);
            return;
        }
        else{
            res.redirect('/formulas/addbottle');
        }
    });
});

router.get('/test',function(req,res){
    Bottle.find({},function(err,bottles){
        res.render('testdisease',{
            bottles:bottles
        });
    });
});

router.post('/test',function(req,res){
    Bottle.find({},function(err,bottles){
        res.render('testdisease',{
            bottles:bottles
        });
    });
});

module.exports = router;