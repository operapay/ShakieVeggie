const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const db = require('../config/database');

let Order = require('../models/order');
let Formula = require('../models/formula');
let Bottle = require('../models/bottle');

//รับค่าจาก checkout หน้า cart
router.get('/:id/:total',function(req,res){
    Order.findById(req.params.id, function(req, order){
        Bottle.find({}, function(req, bottle){
            res.render('payment', {
                order:order,
                bottle:bottle
            }); 
        })       
    });
});

// router.get('/checkout/:id', function(req,res){
//     Order.findById(req.params.id, function(req, order){
//         res.render('payment', {
//             orders:order
//         });        
//     });
// });


router.post('/:id/:total',function(req,res){

    let order = {};
    order.name = req.body.name;
    order.address = req.body.address;
    order.address2 = req.body.address2;
    order.country = req.body.country;
    order.state = req.body.state;
    order.zip = req.body.zip;
    order.totalprice = req.params.total;


    let query = {_id:req.params.id}

    Order.update(query, order, function(err){
        if(err) {
            console.log(err);
            return;
        }
    });    
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