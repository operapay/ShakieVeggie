const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const db = require('../config/database');

//Bring in disease model
let Disease = require('../models/disease');

//disease filter form
router.get('/disease',function(req,res){
    res.render('testdisease');
});

router.post('/disease', function (req, res) {
    if(req.body.kidney){
        console.log('kidney');
    }
    if(req.body.liver){
        console.log('liver');
    }
    if(req.body.hypertension){
        console.log('hypertension');
    }
    else{
        console.log('healthy');
    }
});

module.exports = router;