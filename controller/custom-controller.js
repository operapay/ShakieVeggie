let Formula = require('../models/formula');
let Nutrient = require('../models/nutrient');
let Bottle = require('../models/bottle')
let Order = require('../models/order');
const {HandingErorr} = require('./handingError')
exports.disease = async (req, res, next) => {
    try {
        const {
            kidney,
            liver,
            hypertension,
            diabetes,
            pregnant,
            surgery,
        } = req.body;

        if(kidney){
            checkkidney = 1;
            console.log('kidney');
        }
        if(liver){
            checkliver = 1;
            console.log('liver');
        }
        if(hypertension){
            checkhypertension = 1;
            console.log('hypertension');
        }
        if(diabetes){
            checkdiabetes = 1;
            console.log('diabetes');
        }
        if(pregnant){
            checkpregnant = 1;
            console.log('pregnant');
        }
        if(surgery){
            checksurgery = 1;
            console.log('surgery');
        }
        Order.findById(req.params.order,function(err,orders){
            Formula.findById(req.params.id, function(err,formula){
                res.redirect('/custom/'+  orders._id + "/" + formula._id + '/component');
            });
        });
    }
    catch (e) {
        HandingErorr(res, e)
    }
}
exports.rendercustom = async (req, res, next) => {
    try {
        Order.findById(req.params.order,function(err,orders){
            Formula.findById(req.params.id, function(err,formula){
                Nutrient.findById(formula.component1,function(err,nutrient1){
                    Nutrient.findById(formula.component2,function(err,nutrient2){
                        Nutrient.findById(formula.component3,function(err,nutrient3){
                            res.render('custom', {
                                orders:orders._id,
                                formula:formula,
                                component1:nutrient1,
                                component2:nutrient2,
                                component3:nutrient3,
                                //orderid = orders._id
                            }); 
                        });
                    });
                });
            });
        });
        checkkidney = 0;
        checkliver = 0;
        checkhypertension = 0;
        checkdiabetes = 0;
        checkpregnant = 0;
        checksurgery = 0;
    }
    catch (e) {
        HandingErorr(res, e)
    }
}
exports.addtocart = async (req, res, next) => {
    try {
        const {
            component1,
            component2,
            component3,
            amont,
        } = req.body;

        const bottle = new Bottle();

        bottle.orderid = req.params.order;
        bottle.formulaid = req.params.id;
        bottle.fruit1 = component1;
        bottle.fruit2 = component2;
        bottle.fruit3 = component3;
        bottle.amount = amont;
        //console.log(bottle.amount);
        bottle.save();
        req.flash('success','Added order to cart');
        res.redirect('/formulas/' + req.params.order);
    }
    catch (e) {
        HandingErorr(res, e)
    }
}
exports.customnodisease = async (req, res, next) => {
    try {
        Order.findById(req.params.order,function(err,orders){
            Formula.findById(req.params.id, function(err,formula){
                Nutrient.findById(formula.component1,function(err,nutrient1){
                    Nutrient.findById(formula.component2,function(err,nutrient2){
                        Nutrient.findById(formula.component3,function(err,nutrient3){
                            res.render('customnodisease', {
                                orders:orders._id,
                                formula:formula,
                                component1:nutrient1,
                                component2:nutrient2,
                                component3:nutrient3,
                                //orderid = orders._id
                            }); 
                        });
                    });
                });
            });
        });
    }
    catch (e) {
        HandingErorr(res, e)
    }
}