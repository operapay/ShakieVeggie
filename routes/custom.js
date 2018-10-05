const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const db = require('../config/database');

//Bring in disease model
let Disease = require('../models/disease');

//disease filter process
router.get('/',function(req,res){
    res.render('custom');
});

router.post('/',function(req,res,done){
        const kidney = req.body.kidney ? true : false;
        const liver = req.body.liver ? true : false;
        const hypertension = req.body.hypertension ? true : false;
        const diabetes= req.body.diabetes ? true : false;
        const pregnant = req.body.pregnant ? true : false;
        const surgery = req.body.surgery ? true : false;

        let disease = new Disease({
            kidney:kidney,
            liver:liver,
            hypertension:hypertension,
            diabetes:diabetes,
            pregnant:pregnant,
            surgery:surgery
        });

        disease.save(function(err){
            if(err){
                console.log(err);
                return;
            }
            else{
                req.flash('success','disease filter ok');
                res.redirect('/');
            }
        });
});

module.exports = router;