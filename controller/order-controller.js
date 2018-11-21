let Order = require('../models/order');
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