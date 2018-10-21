const express = require('express');
const router = express.Router();
const db = require('../config/database');


let Formula = require('../models/formula');
let Nutrient = require('../models/nutrient');
let Bottle = require('../models/bottle');
let Recommend = require('../models/recommend');

router.get('/:id', function(req,res){
    Formula.findById(req.params.id, function(err,formula){
        Nutrient.findById(formula.component1,function(err,nutrient1){
            Nutrient.findById(formula.component2,function(err,nutrient2){
                Nutrient.findById(formula.component3,function(err,nutrient3){
                    Recommend.findOne({formulaid:formula._id},function(err,recommend){
                        res.render('recommend', {
                            formula:formula,
                            component1:nutrient1,
                            component2:nutrient2,
                            component3:nutrient3,
                            recommend:recommend
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
    
    if(req.params.id=="5bc3f01165a21c60281cac7b" && checkdiabetes) {
        req.flash('danger','Please choose the other formulas.');
        res.redirect('/formulas');
    } else if(req.params.id=="5bc86640f03647141457274e" && checksurgery) {
        req.flash('danger','Please choose the other formulas.');
        res.redirect('/formulas');
    } else if(req.params.id=="5bc86640f03647141457274e" && checkkidney) {
        req.flash('danger','Please choose the other formulas.');
        res.redirect('/formulas');
    } else if(req.params.id=="5bc8665df03647141457274f" && checksurgery) {
        req.flash('danger','Please choose the other formulas.');
        res.redirect('/formulas');
    } else if(req.params.id=="5bc8665df03647141457274f" && checkdiabetes) {
        req.flash('danger','Please choose the other formulas.');
        res.redirect('/formulas');
    } else if(req.params.id=="5bc8665df03647141457274f" && checkhypertension) {
        req.flash('danger','Please choose the other formulas.');
        res.redirect('/formulas');
    } else {
        Formula.findById(req.params.id, function(err,formula){
            res.redirect('/recommend/'+ formula._id + '/component');
        });
    }
});

router.get('/:id/component',function(req,res){
    Formula.findById(req.params.id, function(err,formula){
        Nutrient.findById(formula.component1,function(err,nutrient1){
            Nutrient.findById(formula.component2,function(err,nutrient2){
                Nutrient.findById(formula.component3,function(err,nutrient3){
                    Recommend.findOne({formulaid:formula._id},function(err,recommend){
                        res.render('recommend2', {
                            formula:formula,
                            component1:nutrient1,
                            component2:nutrient2,
                            component3:nutrient3,
                            recommend:recommend
                        }); 
                    }); 
                });
            });
        });
    });
});

router.post('/:id/component',function(req,res){    
    
    let bottle = new Bottle();   
    bottle.formulaid = req.params.id;
    bottle.fruit1 = req.body.component1;
    bottle.fruit2 = req.body.component2;
    bottle.fruit3 = req.body.component3;
    bottle.amount = req.body.amont;

    console.log(req.params.id);    
    console.log(req.body.component1);
    console.log(req.body.component2);
    console.log(req.body.component3);
    console.log(req.body.amont);

    bottle.save(function(err){
        if(err){
            console.log(err);
            return;
        }
        else{
            req.flash('success','Added order to cart');
            res.redirect('/formulas');
        }
    });
});

router.get('/add',function(req,res){
    res.render('add_rec', {
        title:'Add Recommend'
    });
});

router.post('/add',function(req,res){
    let recommend = new Recommend();
    recommend.formulaid = req.body.formulaid;
    recommend.ingredient1 = req.body.ingredient1;
    recommend.ingredient2 = req.body.ingredient2;
    recommend.ingredient3 = req.body.ingredient3;

    recommend.save(function(err){
        if(err){
            console.log(err);
            return;
        }
        else{
            //req.flash('success','Formula Added');
            res.redirect('/');
        }
    });
});

module.exports = router;