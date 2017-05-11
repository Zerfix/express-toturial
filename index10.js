// tutorial: https://www.tutorialspoint.com/expressjs/
// 10 Sessions

// express
var express = require("express")
var app		= express()

// cookie parser
var cookieParser = require("cookie-parser")

// session
var session = require("express-session")
app.use(session({secret: "Shh, its a secret!"}))


// routing
app.get("/", function(req, res) {
	if(req.session.page_views) {
		req.session.page_views++
		res.send("You visited this page " + req.session.page_views + " times!")
	}
	else {
		req.session.page_views = 1
		res.send("Welcome to this page for the first time!")
	}
})


// listen
app.listen(3000)
