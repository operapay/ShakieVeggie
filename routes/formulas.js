const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const db = require('../config/database');

let Formula = require('../models/formula');

router.get('/',function(req,res){
    Formula.find({},function(err,formulas){
        res.render('formula',{
            title:'formulas',
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
router.post('/add',function(req,res){
    let formula = new Formula();
    formula.formulaname = req.body.formulaname;
    formula.component1 = req.body.component1;
    formula.component2 = req.body.component2;
    formula.component3 = req.body.component3;

    formula.save(function(err){
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