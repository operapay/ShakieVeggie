const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const db = require('../config/database');

//disease filter form
router.get('/',function(req,res){
    res.render('payment');
});

module.exports = router;