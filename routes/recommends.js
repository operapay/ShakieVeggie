const express = require('express');
const router = express.Router();
const recommendCtrl = require('../controller/recommend-controller')

router.get('/:order/:id',recommendCtrl.renderrecommend)

router.post('/:order/:id', recommendCtrl.disease)

router.get('/:order/:id/component',recommendCtrl.customnodisease)

router.post('/:order/:id/component',recommendCtrl.addtocart)


module.exports = router;