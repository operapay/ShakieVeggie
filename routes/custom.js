const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const db = require('../config/database');

//Bring in disease model
let Disease = require('../models/disease');

//disease filter process
router.get('/disease',function(req,res){
    res.render('testdisease');
});

router.post('/disease', function (req, res) {
    //res.json(req.body);
    if(req.body.kidney){
        req.flash('success','you choose kidney');
        res.redirect('/custom/disease');
    }
    if(req.body.liver){
        req.flash('success','you choose liver');
        res.redirect('/custom/disease');
    }
    if(req.body.hypertension){
        req.flash('success','you choose hypertension');
        res.redirect('/custom/disease');
    }
});

module.exports = router;