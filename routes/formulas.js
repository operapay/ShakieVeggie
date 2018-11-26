const express = require('express');
const router = express.Router();
let Formula = require('../models/formula');
let Order = require('../models/order');
let Nutrient = require('../models/nutrient')


router.get('/:id',function(req,res){
    var bg = ['/img/sugar.jpg','/img/antiage.jpg','/img/cores.jpg','/img/detox.jpg','/img/custom_bg.jpg','/img/fatburn.jpg','/img/blood.jpg','/img/eyes.jpg']
    Order.findById(req.params.id, function(err,orders){
        Formula.find({},function(err,formulas){
            Nutrient.find({},function(err,nutrient1){
                res.render('formula', {
                    formulas:formulas,
                    orders:orders,
                    bg,
                    component:nutrient1
                });                     
            });
        });
    });
});

module.exports = router;