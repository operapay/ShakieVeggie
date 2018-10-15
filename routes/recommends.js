const express = require('express');
const router = express.Router();
const db = require('../config/database');

//Bring in Recommend Model
let Recommend = require('../models/recommend'); 

router.get('/3', function(req,res){
    Recommend.findOne({bottle:3}, function(err, bottle){
        res.render('bottle_3', {bottle: bottle});
    })
})

module.exports = router;