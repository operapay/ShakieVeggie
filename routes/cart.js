const express = require('express');
const router = express.Router();
const db = require('../config/database');

let Bottle = require('../models/bottle');
let Order = require('../models/order');

router.get('/:order',function(req,res){

    console.log(req.params.order);
    
    Order.findById(req.params.order,function(err,orders){
        res.render('cart', {
            order:orders._id,
            ordetail:orders
        });
    });
});

module.exports = router;