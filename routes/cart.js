const express = require('express');
const router = express.Router();
const orderCtrl = require('../controller/order-controller')

router.get('/:id', orderCtrl.cart)

router.post('/:id/:bottle',orderCtrl.deletecart)

router.post('/edit/:id/:bottle', orderCtrl.editcart)

router.post('/confirm/:id/:bottle',orderCtrl.confirmcart)

module.exports = router;