// tutorial: https://www.tutorialspoint.com/expressjs/
// 8 Database

// express /////
var express = require("express")
var app 	= express()

// Parser /////
var bodyParser	= require("body-parser")
app.use(bodyParser.urlencoded({extended: true}))

// mongodb /////
var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/my_db")

var personSchema = mongoose.Schema({
	name: String,
	age: Number,
	nationality: String
})
var Person = mongoose.model("Person", personSchema)

// pug /////
app.set("view engine", "pug")
app.set("views", "./views")

// route //////////////////////////////////////////////////
// root /////
app.get("/", function(req, res) {
	res.render("person")
})


// post /////
app.post("/post", function(req, res) {
	var personInfo = req.body
	if(!personInfo.name || !personInfo.age || !personInfo.nationality) {
		res.render("show_message", {message: "Sorry, you provided wrong info", type: "error"})
	}
	else {
		var newPerson = new Person({
			name: personInfo.name,
			age: personInfo.age,
			nationality: personInfo.nationality
		})
		newPerson.save(function(err, Person) {
			if(err) {
				res.render("show_message", {
					message: "Database error",
					type: "error"
				})
			}
			else {
				res.render("show_message", {
					message: "New person added",
					type: "sucsess",
					person: newPerson
				})
			}
		})
	}
})

// get /////
app.get("/get", function(req, res) {
	Person.find(function(err, response) {
		console.log()
		// clarer ikke konvertere til response til object
	})
})

// put /////
app.post("/put", function(req, res) {
	console.log("1")
	Person.Update({name: req.body.name}, {age: req.body.age, nationality: req.body.nationality}, function(err, response) {
		if(err) {
			res.json({message: "Error in updating person with name " + req.body.name})
		}
		res.json(response)
	})
})

// delete /////
app.post("/delete", function(req, res) {
	Person.Remove(req.body.name, function(err, response) {
		if(err) {
			res.json({message: "Error in deleting record name " + req.body.name})
		}
		else {
			res.json({message: "Person with name " + req.body.name + " removed"})
		}
	})
})

// listen /////////////////////////////////////////////////
app.listen(3000)
