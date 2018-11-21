const express = require('express');
const router = express.Router();
const orderCtrl = require('../controller/order-controller')

// router.get('/addorder',function(req,res){
//     res.render('add_order', {
//         title:'Add Order'
//     });
// });

router.post('/addorder/:id', orderCtrl.genorder)


router.get('/billpayment/:order',orderCtrl.bill)

module.exports = router;