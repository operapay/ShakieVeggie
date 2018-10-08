const express = require('express');
const router = express.Router();

//Bring in Recommend Model
let Recommend = require('../models/recommend');

router.get('/',function(req,res){
    res.render('custom');
});

router.get('/3', function(req,res){
    // Recommend.find(req.params.no, function(err, recommend){
    //     res.render('custom')
    // })
    res.render('recommendThree');
})

module.exports = router;