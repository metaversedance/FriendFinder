var path = require("path");
var friends = require("./../data/friends.js");

module.exports.getFriends = function(req,res){
	res.json(friends);
}
module.exports.postFriends = function(req, res) {
  var newFriend = req.body;

  console.log("newFriend",newFriend);

  var diffArr = [];
  friends.forEach(function(friend){
  	var friendshipScore = 0;
  	friend.scores.forEach(function(score,idx){
  		var diffScore = Math.abs(newFriend.scores[idx] - score)
  		friendshipScore+=diffScore;
  	})
  	diffArr.push(friendshipScore);

  });
  console.log(diffArr);
  var closestFriend;
  var lowestDiff = diffArr[0];
  diffArr.forEach(function(diff,idx){
  	if(diff < lowestDiff){
  		closestFriend = friends[idx];
  	}
  })

  res.json(closestFriend);

  friends.push(newFriend);

}