// tutorial: https://www.tutorialspoint.com/expressjs/
// 1 hello world

// express
var express = require("express")
var app 	= express()


app.get("/", function(req, res) {
	res.send("hello world!")
})

app.post("/hello", function(req, res) {
	res.send("you just called the method at '/hello'!")
})

app.all("/test", function(req, res) {
	res.send("HTTP method doesn't have any effect on this route!")
})


app.listen(3000)
