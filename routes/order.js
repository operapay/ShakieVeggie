const express = require('express');
const router = express.Router();

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


router.get('/billpayment/:order',function(req,res){
    Order.findById(req.params.order, function(req, order){
        res.render('billpayment', {
            order:order
        });        
    });
});

module.exports = router;