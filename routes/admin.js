const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const db = require('../config/database');

let Order = require('../models/order');
let Bottle = require('../models/bottle');

router.get('/payment',function(req,res){
    Order.find({},function(err,orders){
        res.render('payment_table',{
            orders:orders
        });
    });
});

router.post('/payment/:id',function(req,res){
    let order = {};
    order.paymentstatus = 0;
    //จ่ายแล้ว

    let query = {_id:req.params.id}
    Order.update(query, order, function(err){
        if(err){
            console.log(err);
            return;
        }
        else{
            console.log(req.params.id);
        }
    });
    //console.log(req.params.id);
});

router.get('/mixing',function(req,res){
    Order.find({},function(err,orders){
        Bottle.find({},function(err,bottles){
            res.render('mixing_table',{
                orders:orders,
                bottles:bottles
            });
        });
    });  
});

router.get('/sending',function(req,res){
    Order.find({},function(err,orders){
        res.render('sending_table',{
            orders:orders
        });
    });
});

module.exports = router;