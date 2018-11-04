const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const db = require('../config/database');
const {ObjectId} = require('mongodb'); 

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
            console.log(query);
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

router.post('/sending/:id',function(req,res){
    let order = {};
    order.mixingstatus = 0;
    //พร้อมส่ง

    let query = {_id:req.params.id}
    Order.update(query, order, function(err){
        if(err){
            console.log(err);
            return;
        }
        else{
            res.redirect('/admin/sending');
            // Order.find({},function(err,orders){
            //     res.render('sending_table',{
            //         orders:orders
            //     });
            // });
        }
    });
});

router.post('/tracking/:id',function(req,res){
    //console.log(req.params.id);
    let order = {};
    order.trackingnum = req.body.trackingnum;

    let query = {_id:req.params.id}
    Order.update(query, order, function(err){
        if(err){
            console.log(err);
            return;
        }
        else{
            res.redirect('/admin/sending');
            // Order.find({},function(err,orders){
            //     res.render('sending_table',{
            //         orders:orders
            //     });
            // });
        }
    });
});

router.post('/clearmixing',function(req,res){
    //console.log('clear')

    Order.find({},function(err,orders){
            //orders:orders
        for(var i = 0; i < orders.length;i++){
            if(orders[i].paymentstatus == 0){
                let order = {};
                order.clearmixing = 0;
                let query = {_id:orders[i]._id}
                Order.update(query, order, function(err){});
                //console.log(query)
            }
            //console.log(orders[i]._id)
        }
        res.redirect('/admin/mixing');
    });

});

router.post('/clearsending',function(req,res){
    //console.log('clear')

    Order.find({},function(err,orders){
            //orders:orders
        for(var i = 0; i < orders.length;i++){
            if(orders[i].trackingnum != null){
                let order = {};
                order.clearsending = 0;
                let query = {_id:orders[i]._id}
                Order.update(query, order, function(err){});
                //console.log(query)
            }
            //console.log(orders[i]._id)
        }
        res.redirect('/admin/sending');
    });

});

router.post('/clearpayment',function(req,res){
    //console.log('clear')

    Order.find({},function(err,orders){
            //orders:orders
        for(var i = 0; i < orders.length;i++){
            if(orders[i].paymentstatus == 0){
                let order = {};
                order.clearpayment = 0;
                let query = {_id:orders[i]._id}
                Order.update(query, order, function(err){});
                //console.log(query)
            }
            //console.log(orders[i]._id)
        }
        res.redirect('/admin/payment');
    });

});

module.exports = router;