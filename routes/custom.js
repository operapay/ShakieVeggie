const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const db = require('../config/database');


let User = require('../models/user');
let Formula = require('../models/formula');
let Nutrient = require('../models/nutrient');


router.get('/:id', function(req,res){
    Formula.findById(req.params.id, function(err,formula){
        Nutrient.findById(formula.component1,function(err,nutrient1){
            Nutrient.findById(formula.component2,function(err,nutrient2){
                Nutrient.findById(formula.component3,function(err,nutrient3){
                    res.render('custom', {
                        formula:formula,
                        component1:nutrient1,
                        component2:nutrient2,
                        component3:nutrient3
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
});

router.post('/:id', function (req, res) {
    //res.json(req.body);
    const kidney = req.body.kidney;
    const liver = req.body.liver;
    const hypertension = req.body.hypertension;
    const diabetes = req.body.diabetes;
    const pregnant = req.body.pregnant;
    const surgery = req.body.surgery;
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
    Formula.findById(req.params.id, function(err,formula){
        res.redirect('/custom/'+ formula._id + '/component');
    });
});

router.get('/:id/component',function(req,res){
    Formula.findById(req.params.id, function(err,formula){
        Nutrient.findById(formula.component1,function(err,nutrient1){
            Nutrient.findById(formula.component2,function(err,nutrient2){
                Nutrient.findById(formula.component3,function(err,nutrient3){
                    res.render('customnodisease', {
                        formula:formula,
                        component1:nutrient1,
                        component2:nutrient2,
                        component3:nutrient3
                    }); 
                });
            });
        });
    });
});

router.post('/:id/component',function(req,res){
    req.flash('success','Added order to cart');
    res.redirect('/formulas');
});

router.get('/bottle_three',function(req,res){
    res.render('recommendThree');
});


module.exports = router;