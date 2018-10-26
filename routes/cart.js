const express = require('express');
const router = express.Router();
const db = require('../config/database');

let Formula = require('../models/formula');
let Bottle = require('../models/bottle');
let Order = require('../models/order');

router.get('/:id',function(req,res){
    Order.findById(req.params.id, function(err,orders){
        Bottle.find({},function(err,bottles){
            Formula.find({},function(err,formulas){
                res.render('cart',{
                    bottles:bottles,
                    orders:orders,
                    formulas:formulas
                });
            });
        });
    });
});

router.post('/:id/:bottle',function(req,res){
    //console.log(req.params.id);
    let query = {_id:req.params.bottle}

    Bottle.remove(query, function(err){
        if(err){
           console.log(err); 
        }
        res.redirect('/cart/' + req.params.id);
    });
});

module.exports = router;