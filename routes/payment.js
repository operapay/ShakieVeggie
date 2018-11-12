const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const db = require('../config/database');

let Order = require('../models/order');
let Formula = require('../models/formula');
let Bottle = require('../models/bottle');

//รับค่าจาก checkout หน้า cart
router.post('/:id/:total',function(req,res){
    Order.findById(req.params.id, function(req, order){
        res.render('payment', {
            orders:order
        });        
    });
});

// router.get('/checkout/:id', function(req,res){
//     Order.findById(req.params.id, function(req, order){
//         res.render('payment', {
//             orders:order
//         });        
//     });
// });


router.post('/check/:id',function(req,res){
    // var update = { $set: {username:req.body.name, 
    //                     address:req.body.address,
    //                     address2:req.body.address2,
    //                     country:req.body.country,
    //                     state:req.body.state,
    //                     zip:req.body.zip }};
    let order = {};
    order.username = req.body.name;
    order.address = req.body.address;
    order.address2 = req.body.address2;
    order.country = req.body.country;
    order.state = req.body.state;
    order.zip = req.body.zip;

    console.log(req.body.name);
    console.log(req.body.address);
    console.log(req.body.address2);
    console.log(req.body.country);
    console.log(req.body.state);
    console.log(req.body.zip);

    let query = {_id:req.params.id}

    Order.update(query, order, function(err){
        if(err) {
            console.log(err);
            return;
        } else {
            req.flash('success','order in system');
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