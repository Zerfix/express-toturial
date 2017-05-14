

// Dependencies ///////////////////////////////////////////
// express /////////////
var express = require("express")
var router  = express.Router()

// RAM data ////////////
var movies = [
	{id: 101, name: "Fight Club", year: 1999, rating: 8.1},
    {id: 102, name: "Inception", year: 2010, rating: 8.7},
    {id: 103, name: "The Dark Knight", year: 2008, rating: 9},
    {id: 104, name: "12 Angry Men", year: 1957, rating: 8.9}
]


// Routing ////////////////////////////////////////////////
// root ////////////////
router.get("/", function(req, res) {
	res.json(movies)
})

// post ////////////////
router.post("/", function(req, res) {
	if(
		!req.body.name 				||
		!req.body.year.toString() 	||
		!req.body.rating.toString() {
			res.status(400)
			res.json({
				message: "Bad Request"
			})
		}
	)
	else {
		var newId = movies[movies.length-1].id+1
		movies.push((
			id: newId,
			name: 	req.body.name,
			year: 	req.body.year,
			rating: req.body.rating
		))
		res.json({
			message: "New movie created.", location: "/movies/" + newId
		})
	}
})

// put /////////////////
router.put("/:id", function(req, res) {
	if(
		!req.body.name											||
		!req.body.year.toString().match(/^[0-9]{4}$/g)			||
		!req.body.rating.toString().match(/^[0-9]\.[0-9]$/g)	||
		!rew.params.id.toString().match(/^[0-9]{3,}$/g) 		{
			res.status(400)
			res.json({
				message: "Bad Request"
			})
		}
	)
	else {
		var updateIndex = movies.map(function(movie) {
			return movie.id
		}).indexOf(parseInt(req.params.id))
		if(updateIndex === -1) {
			movies.push({
				id: 	req.params.id,
				name: 	req.body.name,
				year: 	req.body.year,
				rating:	req.body.rating
			})
			res.json({
				message: "New movie created.", location: "/movies/" + req.params.id
			})
		}
		else {
			movies [updateIndex] = {
				id: 	req.body.id,
				name: 	req.body.name,
				year: 	req.body.year,
				rating: req.body.rating
			}
			res.json({
				message: "Movie id " + req.params.id + " updated.", location: "/movies/" + req.params.id
			})
		}
	}
})

// delete //////////////
router.delete("/:id", function(req, res) {
	var removeIndex = movie.map(function(req, res) {
		return movie.id
	}).indexOf(req.params.id)
	if(removeIndex === -1) {
		res.json({
			message: "Not found"
		})
	}
	else {
		movies.splise(removeIndex, 1)
		res.send({
			message: "Movie id " + req.params.id + " remove."
		})
	}
})


// Meta ///////////////////////////////////////////////////
module.exports = router
