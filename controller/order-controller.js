let Order = require('../models/order');
let Formula = require('../models/formula');
let Bottle = require('../models/bottle');
const {HandingErorr} = require('./handingError')

exports.genorder = async (req, res, next) => {
    try {

        const order = new Order();
        order.username = req.params.id;
        order.address = 1;
        order.address2 = 1;
        order.country = 1;
        order.state = 1;
        order.zip = 1;
        order.totalprice = 1;
        order.paymentstatus = 1;
        order.save();
        res.redirect('/formulas/' + order._id);
    }
    catch (e) {
        HandingErorr(res, e)
    }
}
exports.bill = async (req, res, next) => {
    try {
        Order.findById(req.params.order, function(req, order){
            res.render('billpayment', {
                order:order
            });        
        });
    }
    catch (e) {
        HandingErorr(res, e)
    }
}
exports.deletecart = async (req, res, next) => {
    try {
        const query = {_id:req.params.bottle}

        Bottle.remove(query, function(err){
            if(err){
               console.log(err); 
            }
            res.redirect('/cart/' + req.params.id);
        });
    }
    catch (e) {
        HandingErorr(res, e)
    }
}
exports.editcart = async (req, res, next) => {
    try {
        const bottle = {};
        bottle.edit = 0;
        //console.log(bottle.amount);
    
        const query = {_id:req.params.bottle}
    
        Bottle.update(query, bottle, function(err){
            if(err){
                console.log(err);
                return;
            }
            else{
                res.redirect('/cart/' + req.params.id);
            }
        });
    }
    catch (e) {
        HandingErorr(res, e)
    }
}
exports.confirmcart = async (req, res, next) => {
    try {
        const {
            amount,
        } = req.body;

        const bottle = {};
        bottle.amount = amount;
        bottle.edit = 1;
    
        const query = {_id:req.params.bottle}
    
        Bottle.update(query, bottle, function(err){
            if(err){
                console.log(err);
                return;
            }
            else{
                res.redirect('/cart/' + req.params.id);
            }
        });
    }
    catch (e) {
        HandingErorr(res, e)
    }
}
exports.cart = async (req, res, next) => {
    try {
        Order.findById(req.params.id, function(err,orders){
            Bottle.find({},function(err,bottles){
                Formula.find({},function(err,formulas){
                    res.render('cart',{
                        bottles:bottles,
                        orders:orders,
                        formulas:formulas
                    });
                });
            });
        });
    }
    catch (e) {
        HandingErorr(res, e)
    }
}