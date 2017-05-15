// tutorial: https://www.tutorialspoint.com/expressjs/
// 13 Error Handling


// Dependencies ///////////////////////////////////////////
// express /////////////
var express  = require("express")
var app 	 = express()


// routing ////////////////////////////////////////////////
app.get("/", function(req, res) {
	var err = new Error("Somthing went wrong!")
	next(err)
})


// Middleware end /////////////////////////////////////////
// error handling //////
app.use(function(err, req, res, next) {
	res.status(500)
	res.send("Oops, somthing went wrong.")
})


// Meta ///////////////////////////////////////////////////
app.listen(3000)
