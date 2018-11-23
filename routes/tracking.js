const express = require('express');
const router = express.Router();

let Order = require('../models/order');
let User = require('../models/user');
let Bottle = require('../models/bottle');
let Formula = require('../models/formula');

//tracking
router.get('/track/:id/:user/:num',function(req,res){
    var num = req.params.num;
    Order.findById(req.params.id,function(err,order){
        User.findById(req.params.user,function(err,users){
            Bottle.find({},function(err,bottles){
                Formula.find({},function(err,formulas){
                    res.render('tracking',{
                        order:order,
                        users:users,
                        bottles:bottles,
                        formulas:formulas,
                        num
                    });
                });
            });
        });
    });
});


router.get('/:id', function(req,res){
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