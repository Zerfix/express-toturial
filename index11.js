// tutorial: https://www.tutorialspoint.com/expressjs/
// 11 Authentication


// Dependencies ///////////////////////////////////////////
var express = require("express")
var app		= express()

// body parser
var bodyParser = require("body-parser")
var multer		= require("multer")
var upload		= multer()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extend: true}))
app.use(upload.array())

// cookie parser
var cookieParser = require("cookie-parser")
app.use(cookieParser())

// session
var session = require("express-session")
app.use(session({secret: "Your secret key"}))

// pug
app.set("view engine", "pug")
app.set("views", "./views")

// data /////
var Users = []


// Middleware Start ///////////////////////////////////////
// is logged in /////


// Routing ////////////////////////////////////////////////
// signup /////
app.get("/signup", function(req, res) {
	console.log("1")
	res.render("signup")
})

app.post("/signup", function(req, res) {
	console.log("2")
	if(!req.body.id || !req.body.password) {
		console.log("3T")
		res.status("400")
		res.send("invalid details!")
	}
	else {
		console.log("3")
		Users.filter(function(user) {
			console.log("4")
			if(user.id === req.body.id) {
				res.render("signup", {
					message: "User Alredy Extist! Login or chose another user id"
				})
			}
		})
		console.log("5")
		var newUser = {
			id: req.body.id,
			password: req.body.password
		}
		Users.push(newUser)
		req.session.user = newUser
		res.redirect("/protected_page")
	}
})

function checkSignIn(req, res, next) {
	if(req.session.user) {
		next()
	}
	else{
		var err = new Error("Not logged in!")
		console.log(req.session.user)
		next(err)
	}
}


// login /////
app.get("/protected_page", checkSignIn, function(req, res) {
	res.render("protected_page", {id: req.session.user.id})
})

app.get("/", function(req, res) {
	res.render("login")
})

app.post("/login", function(req, res) {
	console.log(Users)
	if(!req.body.id || !req.body.password) {
		res.render("login", {message: "Please enter both id and password"})
	}
	else {
		Users.filter(function(user) {
			if(user.id === req.body.id && user.password === req.body.password) {
				req.session.user = user
				res.redirect("/protected_page")
			}
		})
		res.render("login", {message: "invalid credentials!"})
	}
})

// logout /////
app.get("/logout", function(req, res) {
	req.session.destroy(function(req2, res2) {
		console.log("user logged out")
		res.redirect("/")
	})
})


// middleware end /////////////////////////////////////////
// error handling /////
app.use("/protected_page", function(err, req, res, next) {
	console.log(err)
	res.redirect("/login")
})


// Meta ///////////////////////////////////////////////////
app.listen(3000)
