const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const config = require('./config/database');

mongoose.connect(config.database);
let db = mongoose.connection;

// check connection
db.on('open',function(err){
    console.log('connected to MongoDB');
});

// check for DB errors
db.on('error',function(err){
    console.log(err);
});

//Init App
const app = express();

// Load View Engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');

//body paeser middleware
//parse opplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse opplication/json
app.use(bodyParser.json())

// set public folder
app.use(express.static(path.join(__dirname,'public')));

// Express Session middleware
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

// Express message middleware
app.use(flash());
app.use(function(req,res,next){
    res.locals.messages = require('express-messages')(req,res);
    next();
});

// Express validator
app.use(expressValidator({
    errorFormatter: function(param,msg,value){
        var namespace = param.split('.')
        ,root = namespace.shift()
        ,formParam = root;

        while(namespace.length){
            formParam += '[' + namespace.shift() + ']';
        }
        return{
            param : formParam,
            msg : msg,
            value : value
        };
    }
}));

//passport config
require('./config/passport')(passport);

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('*',function(req,res,next){
    res.locals.user = req.user || null;
    next();
});

// Home Route
app.get('/', function(req,res){
    res.render('index', {
        //title:'Medals Table' ,
        //articles: articles
    });
});

let users = require('./routes/users');
app.use('/users', users);

let custom = require('./routes/custom');
app.use('/custom', custom);

let payment = require('./routes/payment');
app.use('/payment', payment);

let formula = require('./routes/formulas');
app.use('/formulas', formula);

let recommend = require('./routes/recommends');
app.use('/recommend', recommend);

// Start Server
app.listen(3000, function(){
    console.log('Server started on port 3000...');
});