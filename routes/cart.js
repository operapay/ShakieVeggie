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

module.exports = router;