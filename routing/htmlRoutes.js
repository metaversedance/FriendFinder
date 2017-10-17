
var path = require("path");

module.exports.survey = function(req,res){
	res.sendFile(path.join(__dirname,'../public/survey.html'));
}

module.exports.home = function(req,res){
	res.sendFile(path.join(__dirname,'../public/home.html'));
}
