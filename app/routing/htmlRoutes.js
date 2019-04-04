var path = require("path");



// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
module.exports = function(app) {
//route to survey page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  //A default, catch-all route that leads to home.html which displays the home page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

}
  
