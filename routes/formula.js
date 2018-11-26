const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const db = require('../config/database');

let Nutrient = require('../models/nutrient')
let Formula = require('../models/formula')
const formulaCtrl = require('../controller/formula-controller')

//payment form
router.get('/',function(req,res){
    Formula.find({},function(err,formulas){
        res.render('testadd',{
            formulas:formulas
        });
    });
});

router.get('/add',function(req,res){
    res.render('add_formula', {
        title:'Add Formula'
    });
});

// Add Submit POST Route
router.post('/add',formulaCtrl.formula)

// router.get('/nutrient',function(req,res){
//     res.render('nu', {
//         title:'Add Nutrient'
//     });
// });

// // Add Submit POST Route
// router.post('/nutrient',function(req,res){
//     let nutrient = new Nutrient();
//     nutrient.name = req.body.name;
//     nutrient.fruit1 = req.body.fruit1;
//     nutrient.fruit2 = req.body.fruit2;
//     nutrient.fruit3 = req.body.fruit3;
//     nutrient.fruit4 = req.body.fruit4;
//     nutrient.fruit5 = req.body.fruit5;
//     nutrient.fruit6 = req.body.fruit6;

//     nutrient.save(function(err){
//         if(err){
//             console.log(err);
//             return;
//         }
//         else{
//             //req.flash('success','nutrient Added');
//             res.redirect('/formula/nutrient');
//         }
//     });
// });

module.exports = router;