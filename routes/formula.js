const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const db = require('../config/database');

//payment form
router.get('/',function(req,res){
    res.render('formula');
});


module.exports = router;