// tutorial: https://www.tutorialspoint.com/expressjs/
// 5 Templating

// express
var express = require("express")
var app 	= express()


//
app.set("view engine", "pug")
app.set("views", "./views")

app.get("/pug", function(req, res) {
	res.render("first_view")
})

app.get("/", function(req, res) {
	res.render("dynamic", {
		name: "TutorialsPoint",
		url:  "http:/www.tutorialspoint.com",
	})
})

app.get("/user", function(req, res) {
	res.render("dynamic", {
		user: {name: "zerfix", age: "9001"},
		name: "TutorialsPoint",
		url:  "http:/www.tutorialspoint.com"
	})
})

app.get("/components", function(req, res) {
	res.render("content")
})


// listen
app.listen(3000)
