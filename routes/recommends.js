const express = require('express');
const router = express.Router();
const db = require('../config/database');

//Bring in Recommend Model
let Recommend = require('../models/recommend'); 

router.get('/3', function(req,res){
    // Recommend.findOne({no: no}, function(err, recommend){
    //     console.log(recommend);
    //     return;
    // })

    res.render('recommendThree');
})

module.exports = router;