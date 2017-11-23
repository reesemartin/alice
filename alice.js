var express = require('express'),
    CONFIG = require("./config.json");
var app = express();
// set the view engine to ejs
// https://scotch.io/tutorials/use-ejs-to-template-your-node-application
app.set('view engine', 'ejs');

// This will allow using the defined locals in all views
// In each view condition you can do the same with "req.locals" instead of "app.locals" for things local to that view only
// In the views using ejs to print the variable, you use "<%= nodeConfig %>" with the equal sign.
// Swapping the equal sign with a minus sign is required to prevent ejs encoding things like JSON.stringify results with html chars
app.locals.nodeConfig = CONFIG;

// this makes anything in the resources folder accessible as if they were top level files "close.wav" not "resources/close.wav" so dont get confused
// without this, they are inaccessible because they are considered server files until you tell express to make them available like this
app.use(express.static('./resources'));

app.get('/', function(req, res){
    res.render('pages/index');
});

// dialogflow test webkit page
app.get('/dialog', function(req, res){
    res.render('pages/dialog');
});
app.listen(8080, 'localhost');
console.log('Server running at http://localhost:8080/');
