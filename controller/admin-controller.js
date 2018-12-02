let Order = require('../models/order');
let Bottle = require('../models/bottle');
let Formula = require('../models/formula');
const {HandingErorr} = require('./handingError')
exports.notpaid = async (req, res, next) => {
    try {
        const order = {};
        order.paymentstatus = 0;

        const query = {_id:req.params.id}
        Order.update(query, order, function(err){
            if(err){
                console.log(err);
                return;
            }
            console.log(order.paymentstatus);
            // else{
            //     res.redirect('/admin/payment');
            // }
        });

        res.sendStatus(200);
    }
    catch (e) {
        HandingErorr(res, e)
    }
}
exports.paid = async (req, res, next) => {
    try {
        const order = {};
        order.paymentstatus = 1;

        const query = {_id:req.params.id}
        Order.update(query, order, function(err){
            if(err){
                console.log(err);
                return;
            }
            console.log(order.paymentstatus);
            // else{
            //     res.redirect('/admin/payment');
            // }
        });

        res.sendStatus(200);
    }
    catch (e) {
        HandingErorr(res, e)
    }
}
exports.mixing = async (req, res, next) => {
    try {
        const order = {};
        order.mixingstatus = 0;

        const query = {_id:req.params.id}
        Order.update(query, order, function(err){
            if(err){
                console.log(err);
                return;
            }
            else{
                res.redirect('/admin/sending');
            }
            //res.sendStatus(200);
        });
    }
    catch (e) {
        HandingErorr(res, e)
    }
}
exports.mixed = async (req, res, next) => {
    try {
        const order = {};
        order.mixingstatus = 1;

        const query = {_id:req.params.id}
        Order.update(query, order, function(err){
            if(err){
                console.log(err);
                return;
            }
            else{
                res.redirect('/admin/sending');
            }
            //res.sendStatus(200);
        });
    }
    catch (e) {
        HandingErorr(res, e)
    }
}
exports.trackingnum = async (req, res, next) => {
    try {
        const {
            trackingnum,
        } = req.body;

        const order = {};
        order.trackingnum = trackingnum;

        const query = {_id:req.params.id}
        Order.update(query, order, function(err){
            if(err){
                console.log(err);
                return;
            }
            else{
                res.redirect('/admin/sending');
            }
        });
    }
    catch (e) {
        HandingErorr(res, e)
    }
}
exports.trackingnull = async (req, res, next) => {
    try {
        const order = {};
        order.trackingnum = null;

        const query = {_id:req.params.id}
        Order.update(query, order, function(err){
            if(err){
                console.log(err);
                return;
            }
            else{
                res.redirect('/admin/sending');
            }
        });
    }
    catch (e) {
        HandingErorr(res, e)
    }
}
exports.clearpayment = async (req, res, next) => {
    try {
        Order.find({},function(err,orders){
            for(var i = 0; i < orders.length;i++){
                if(orders[i].paymentstatus == 0){
                    let order = {};
                    order.clearpayment = 0;
                    let query = {_id:orders[i]._id}
                    Order.update(query, order, function(err){});
                }
                if(orders[i].checkout == 1){
                    let query = {_id:orders[i]._id}
                    Order.remove(query, function(err){});
                }
            }
            res.redirect('/admin/payment');
        });
    }
    catch (e) {
        HandingErorr(res, e)
    }
}
exports.clearsending = async (req, res, next) => {
    try {
        Order.find({},function(err,orders){
            for(var i = 0; i < orders.length;i++){
                if(orders[i].trackingnum != null){
                    let order = {};
                    order.clearsending = 0;
                    let query = {_id:orders[i]._id}
                    Order.update(query, order, function(err){});
                }
            }
            res.redirect('/admin/sending');
        });
    }
    catch (e) {
        HandingErorr(res, e)
    }
}
exports.clearmixing = async (req, res, next) => {
    try {
        Order.find({},function(err,orders){
            for(var i = 0; i < orders.length;i++){
                if(orders[i].paymentstatus == 0){
                    let order = {};
                    order.clearmixing = 0;
                    let query = {_id:orders[i]._id}
                    Order.update(query, order, function(err){});
                }
            }
            res.redirect('/admin/mixing');
        });
    }
    catch (e) {
        HandingErorr(res, e)
    }
}
exports.deleteformula = async (req, res, next) => {
    try {
        const query = {_id:req.params.id}

        Formula.remove(query, function(err){
            if(err){
               console.log(err); 
            }
            res.redirect('/admin/formula');
        });
    }
    catch (e) {
        HandingErorr(res, e)
    }
}