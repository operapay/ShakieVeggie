const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const db = require('../config/database');

let Order = require('../models/order');
let User = require('../models/user');
//รับค่าจาก checkout หน้า cart
router.post('/:id/:total',function(req,res){
    res.render('payment');    
});

router.post('/checkout',function(req,res){
    req.flash('success','order in system');
    res.redirect('/payment/tracking');    
    //res.render('track');
});

//tracking form
router.get('/track/:id',function(req,res){
    res.render('tracking');
});

router.post('/track/:id',function(req,res){
    console.log('submit checkout');
});

router.get('/tracking/:id', function(req,res){
    User.findById(req.params.id,function(err,users){
        Order.find({},function(err,orders){
            if(err){
                console.log(err);
            }
            else{
                res.render('tracking_own', {
                    title:'YOUR ORDER' ,
                    orders: orders,
                    users : users
                });
            }
        });
    });
});

module.exports = router;