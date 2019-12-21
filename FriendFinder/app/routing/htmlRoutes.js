var path = require("path");
//much of this code carried over from the restaurant activity from week 13 class

module.exports = function (app) {
    //GET that will lead to the survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //catch all default to go to the home page
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};