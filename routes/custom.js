const express = require('express');
const router = express.Router();
const customCtrl = require('../controller/custom-controller')

router.get('/:order/:id',customCtrl.rendercustom)

router.post('/:order/:id',customCtrl.disease)

router.get('/:order/:id/component',customCtrl.customnodisease)

router.post('/:order/:id/component',customCtrl.addtocart)


module.exports = router;