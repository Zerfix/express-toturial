// tutorial: https://www.tutorialspoint.com/expressjs/
// 6 Serving Static Files

// express
var express = require("express")
var app 	= express()

// pug
app.set('view engine', 'pug')
app.set('views', './views')

//
app.use("/static", express.static("public"))
app.use(express.static("images"))

app.get("/", function(req, res) {
	res.render("static")
})


// listen
app.listen(3000)
