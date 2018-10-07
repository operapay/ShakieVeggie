const express = require('express');
const router = express.Router();

//Bring in Recommend Model
let Recommend = require('../models/recommend');

// Add route
router.get('/intro', function(req,res){
    res.render('cart');
});

// Add Submit POST Route
router.post('/intro',function(req,res){
    console.log('submitted');
    return;
});

// // Get
// router.get('/cart/:id', function(req,res){
//     Recommend.findById(req.params.id, function(err,recommend){
//         res.render('cart', {
//             // article:article
//         });
//     });
// });

module.exports = router;