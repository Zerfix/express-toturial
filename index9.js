// tutorial: https://www.tutorialspoint.com/expressjs/
// 9 cookies

// express
var express = require("express")
var app 	= express()

// cookie parser
var cookieParser = require("cookie-parser")
app.use(cookieParser())


// routes
app.get("/", function(req, res) {
	res.cookie("name", "express").send("cookie set")
	res.cookie(name, "value", {maxAge: 360000})
	console.log("cookies: ", req.cookies)
})

app.get("/clear_cookie", function(req, res) {
	res.clearCookie("express").send('cookie "express" cleared')
})


// listen
app.listen(3000)
