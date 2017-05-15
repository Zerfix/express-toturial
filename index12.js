// tutorial: https://www.tutorialspoint.com/expressjs/
// 12 RESTFul APIs


// Dependencies ///////////////////////////////////////////
// express /////////////
var express  = require("express")
var app 	 = express()

// body parser /////////
var bodyParser  = require("body-parser")
var multer		= require("multer")
var upload		= multer()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extend: true}))
app.use(upload.array())

// external javascript /
var movies  = require("./movies.js")
app.use("/movies", movies)


// Meta ///////////////////////////////////////////////////
app.listen(3000)
