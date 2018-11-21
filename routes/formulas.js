const express = require('express');
const router = express.Router();
let Formula = require('../models/formula');
let Order = require('../models/order');

router.get('/:id',function(req,res){
    Order.findById(req.params.id, function(err,orders){
        Formula.find({},function(err,formulas){
            res.render('formula',{
                title:'formulas',
                formulas:formulas,
                orders:orders
            });
        });
    });
});

module.exports = router;