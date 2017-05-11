// tutorial: https://www.tutorialspoint.com/expressjs/
// 3 URL Building

// express
var express = require("express")
var app 	= express()


//
app.get("/:name/:id([0-9]{5})", function(req, res) {
	res.send("The id is spesified is " + req.params.id + " and name " + req.params.name)
})

app.get("*", function(req, res) {
	res.send("Error: 404 page not found!")
})


// listen
app.listen(3000)
