var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose =require('mongoose');
require('dotenv').config();

const routerAdmin= require('./routes/admin.route')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("DATA BASE CONNECTED"))
.catch(err=>console.log(err.message));

app.use('/',routerAdmin)


module.exports = app;
