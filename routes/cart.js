const express = require('express');
const router = express.Router();

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

router.post('/edit/:id/:bottle',function(req,res){
    //console.log(req.params.id);
    let bottle = {};
    bottle.edit = 0;
    //console.log(bottle.amount);

    let query = {_id:req.params.bottle}

    Bottle.update(query, bottle, function(err){
        if(err){
            console.log(err);
            return;
        }
        else{
            res.redirect('/cart/' + req.params.id);
        }
    });
});

router.post('/confirm/:id/:bottle',function(req,res){
    //console.log(req.params.id);
    let bottle = {};
    bottle.amount = req.body.amount;
    bottle.edit = 1;
    //console.log(bottle.amount);

    let query = {_id:req.params.bottle}

    Bottle.update(query, bottle, function(err){
        if(err){
            console.log(err);
            return;
        }
        else{
            res.redirect('/cart/' + req.params.id);
        }
    });
});

module.exports = router;