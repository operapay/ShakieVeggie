const express = require('express');
const router = express.Router();
const recommendCtrl = require('../controller/recommend-controller')

router.get('/:order/:id',recommendCtrl.renderrecommend)

router.post('/:order/:id', recommendCtrl.disease)

router.get('/:order/:id/component',recommendCtrl.customnodisease)

router.post('/:order/:id/component',recommendCtrl.addtocart)


// router.get('/add',function(req,res){
//     res.render('add_rec', {
//         title:'Add Recommend'
//     });
// });

// router.post('/add',function(req,res){
//     let recommend = new Recommend();
//     recommend.formulaid = req.body.formulaid;
//     recommend.ingredient1 = req.body.ingredient1;
//     recommend.ingredient2 = req.body.ingredient2;
//     recommend.ingredient3 = req.body.ingredient3;

//     recommend.save(function(err){
//         if(err){
//             console.log(err);
//             return;
//         }
//         else{
//             //req.flash('success','Formula Added');
//             res.redirect('/');
//         }
//     });
// });

module.exports = router;