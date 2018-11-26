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


module.exports = router;