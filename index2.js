// tutorial: https://www.tutorialspoint.com/expressjs/
// 2 Routing

// express
var express = require("express")
var app 	= express()

// external .js
var things  = require("./things.js")


//
app.use("/", things)


// listen
app.listen(3000)
