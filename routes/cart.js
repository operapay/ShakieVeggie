const express = require('express');
const router = express.Router();
const db = require('../config/database');

let Bottle = require('../models/bottle');
let Order = require('../models/order');
let Formula = require('../models/formula');

router.get('/:order',function(req,res){
    Bottle.find({},function(err,bottle){
        Order.findById(req.params.order,function(err,order){
            Formula.findById(bottle.formulaid,function(err,formula){
                res.render('cart', {
                    order:order._id,
                    bottle:bottle,
                    formula:formula.name
                });
            });
        })
    });
});

module.exports = router;