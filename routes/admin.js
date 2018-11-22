const express = require('express');
const router = express.Router();
const adminCtrl = require('../controller/admin-controller')

let Order = require('../models/order');
let Bottle = require('../models/bottle');

router.get('/aboutus',function(req,res){
    res.render('aboutus')
});


router.get('/payment',function(req,res){
    Order.find({},function(err,orders){
        res.render('payment_table',{
            orders:orders
        });
    });
});

router.post('/payment/:id',adminCtrl.notpaid)

router.post('/payment2/:id',adminCtrl.paid)

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

router.post('/sending/:id',adminCtrl.mixing)

router.post('/sending2/:id',adminCtrl.mixed)

router.post('/tracking/:id',adminCtrl.trackingnum)

router.post('/tracking2/:id',adminCtrl.trackingnull)

router.post('/clearmixing',adminCtrl.clearmixing)

router.post('/clearsending',adminCtrl.clearsending)

router.post('/clearpayment',adminCtrl.clearpayment)

module.exports = router;