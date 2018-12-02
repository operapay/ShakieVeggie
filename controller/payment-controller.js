let Order = require('../models/order');
const {HandingErorr} = require('./handingError')

exports.inputdata = async (req, res, next) => {
    try {

        const {
            name,
            address,
            address2,
            country,
            state,
            zip,
        } = req.body;

        const order = {};
        order.name = name;
        order.address = address;
        order.address2 = address2;
        order.country = country;
        order.state = state;
        order.zip = zip;

        const query = {_id:req.params.id}
        Order.update(query, order, function(err){
            if(err) {
                console.log(err);
                return;
            }
            else{
                res.redirect('/order/billpayment/' + req.params.id);
            }
        }); 
    }
    catch (e) {
        HandingErorr(res, e)
    }
}
exports.payment = async (req, res, next) => {
    try {
        Order.findById(req.params.id, function(req, order){
            res.render('payment', {
                order:order._id
            });        
        });
    }
    catch (e) {
        HandingErorr(res, e)
    }
}
exports.totalprice = async (req, res, next) => {
    try {
        const order = {};
        order.totalprice = req.params.total;
        order.checkout = 0;
        const query = {_id:req.params.id}
    
        Order.update(query, order, function(err){
            if(err) {
                console.log(err);
                return;
            }
            else{
                res.redirect('/payment/' + req.params.id + '/' + req.params.total);
            }
        });  
    }
    catch (e) {
        HandingErorr(res, e)
    }
}