// server logic

let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

let app = express();
var PORT = process.env.PORT || 8080; // Sets an initial port. We'll use this later in our listener

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

app.use(express.static('app'));
//routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//listener
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});