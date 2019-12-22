//GET and POST routes for /api/friends
//***include the logic for determining best friend */

//reference to thge data being pulled:
let friends = require("../data/friends.js");

module.exports = function (app) {
    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        //nested loop comparing (best match constantly changes so it has to be a loop)
        let bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };
        let userData = req.body;
        let userScores = userData.scores;
        let totalDifference;
        for (var i = 0; i < friends.length; i++) {
            let currentFriend = friends[i];
            totalDifference = 0;
            //nested loop
            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                let currentUserScores = userScores[j];
                //this makes it so the numbers can't be negative and parses the integers so they get calculated correctly: https://www.w3schools.com/jsref/jsref_parseint.asp
                totalDifference += Math.abs(parseInt(currentFriendScore) - parseInt(currentUserScores));
            }
            if (totalDifference <= bestMatch.friendDifference) {
                //the matching result based upon above calculation
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDifference = totalDifference
            }


        }
        //push data into the friends.js file
        friends.push(userData);
        res.json(bestMatch);

    });
};