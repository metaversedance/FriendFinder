//Dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

//Setting up Express
var app = express();
var PORT = process.env.PORT || 3000;

//Setting up Express with data parsing

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
	type: 'application/vnd.api+json'
}));

var htmlRoutes = require("./routing/htmlRoutes.js");
var apiRoutes = require("./routing/apiRoutes.js")

app.get("/",htmlRoutes.home);
app.get("/survey",htmlRoutes.survey);

app.get("/api/friends",apiRoutes.getFriends);

app.post("/api/friends", apiRoutes.postFriends);


//ROUTES

// app.get('/',function(req,res) {
// 	res.sendFile(path.join(__dirname,'view.html'));
// });


// app.get('/waitlist', function(req,res) {
// 	res.json(reservations);
// });

// app.get('/reservations', function(req,res) {
// 	res.json(reservations.slice(0,5));
// });
// app.get("/reservation.html",function(req,res){
// 	res.sendFile(path.join(__dirname,'reservation.html'));

// })
// app.post("/new-reservation", function(req, res) {
//   var newReservation = req.body;

//   console.log(newReservation);

//   reservations.push(newReservation);

//   res.json(newReservation);
// });



// Starting server listening

app.listen(PORT,function(){
	console.log('Listening on PORT', PORT);
})