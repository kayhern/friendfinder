//GET and POST routes for /api/friends

//reference to thge data being pulled:
let friends = require("../data/friends");

module.exports = function (app) {
    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        //handle compatibility logic???***
        if (friends.length < 5) {
            friends.push(req.body);
            res.json(true);
        } else {
            friends.push(req.body);
            res.json(false);
        }
    });
};