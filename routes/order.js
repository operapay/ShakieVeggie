const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const db = require('../config/database');

let Order = require('../models/order');

router.get('/addorder',function(req,res){
    res.render('add_order', {
        title:'Add Order'
    });
});

router.post('/addorder/:id',function(req,res){
    let order = new Order();
    order.username = req.params.id;
    order.address = 1;
    order.address2 = 1;
    order.country = 1;
    order.state = 1;
    order.zip = 1;
    order.totalprice = 1;
    order.paymentstatus = 1;

    order.save(function(err){
        if(err){
            console.log(err);
            return;
        }
        else{
            console.log(order._id);
            orderid = order._id;
            res.redirect('/formulas/' + order._id);
        }
    });
});

router.post('/test',function(req,res){
    console.log('paid');
});

router.get('/billpayment/:order',function(req,res){
    //console.log(req.params.order);
    Order.findById(req.params.order, function(req, order){
        res.render('add_bottle', {
            order:order
        });        
    });
});

module.exports = router;