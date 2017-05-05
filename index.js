


















// tutorial: https://www.tutorialspoint.com/expressjs/

// req
var express = require("express")
var things  = require("./things.js")

// var
var app = express()


// nr 1 basics ////////////////////////////////////////////

app.get("/", function(req, res) {
	res.send("hello world!")
})

app.post("/hello", function(req, res) {
	res.send("you just called the method at '/hello'!")
})

app.all("/test", function(req, res) {
	res.send("HTTP method doesn't have any effect on this route!")
})


// nr 2 routing ///////////////////////////////////////////

app.use("/things", things)


// nr 3 ///////////////////////////////////////////////////

app.get("/:name/:id([0-9]{5})", function(req, res) {
	res.send("The id is spesified is " + req.params.id + " and name " + req.params.name)
})


// nr 4 middleware ////////////////////////////////////////

// middleware
//app.use(function(req, res, next) {
//	console.log("start")
//	console.log("a new request recevied at " + Date.now())
//	next()
//})

// route
//app.get("/middle", function(req, res, next) {
//	res.send("middle")
//	next()
//})

// middleware
//app.use("/", function(req, res) {
//	console.log("end")
//})


// nr 5 pug ///////////////////////////////////////////////

app.set("view engine", "pug")
app.set("views", "./views")

app.get("/pug", function(req, res) {
	res.render("first_view")
})

app.get("/dynamic_view", function(req, res) {
	res.render("dynamic", {
		name: "TutorialsPoint",
		url:  "http:/www.tutorialspoint.com",
	})
})

app.get("/dynamic_view_user", function(req, res) {
	res.render("dynamic", {
		user: {name: "zerfix", age: "9001"},
		name: "TutorialsPoint",
		url:  "http:/www.tutorialspoint.com"
	})
})

app.get("/components", function(req, res) {
	res.render("content")
})

// nr 6 static files /////////////////////////////////////

app.use(express.static("public"))


// //// /////////////////////////////////////////////////

app.get("*", function(req, res) {
	res.send("Error: 404 page not found!")
})

app.listen(3000)
