// tutorial: https://www.tutorialspoint.com/expressjs/
// 4 Middleware

// express
var express = require("express")
var app 	= express()


// middleware
app.use(function(req, res, next) {
	console.log("start")
	console.log("a new request recevied at " + Date.now())
	next()
})

// route
app.get("/", function(req, res, next) {
	res.send("middle")
	next()
})

// middleware
app.use("/", function(req, res) {
	console.log("end")
})


// listen
app.listen(3000)
