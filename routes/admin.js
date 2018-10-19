const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const db = require('../config/database');

//payment form
router.get('/sending',function(req,res){
    res.render('sending_table');
});

router.get('/mixing',function(req,res){
    res.render('mixing_table');    
});

module.exports = router;