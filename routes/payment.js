const express = require('express');
const router = express.Router();
const paymentCtrl = require('../controller/payment-controller')

//รับค่าจาก checkout หน้า cart
router.get('/:id/:total',paymentCtrl.payment)

router.post('/:id/:total',paymentCtrl.totalprice)

router.post('/:id', paymentCtrl.inputdata)


module.exports = router;