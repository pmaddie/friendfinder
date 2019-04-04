// var path = require("path");
// var router = require("express").Router();

// var survey = require("app/public/survey.html");
// var waitList = require("./../data/waitinglistData");



//require friends.js
var friends = require("../data/friends.js");

module.exports = function(app) {
// display all tables and waitlist
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
  
  
  // Create New Characters - takes in JSON input
app.post("/api/friends", function(req, res) {
  let newfriend = req.body;
  let totaldifference = 99;
  let match;
     //algoriyhm here
     for (i =0; i < friends.length; i++) {
       let newTotalDiff = 0;
        for (j = 0; j < friends[i].scores.length; j++) {
          newTotalDiff += Math.abs(newfriend.scores[j] - friends[i].scores[j]);
        } 
        //check to see if their scores are clsoer than current friends scores
        if (newTotalDiff < totaldifference) {
          match = friends[i];
          totaldifference = newTotalDiff;
        }
     }

//push new friend to array of "friends" 
friends.push(newfriend);
//response JSON match, send value of match
res.json(match);


  });
  
}
