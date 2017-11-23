var express = require('express');
var app = express();
// set the view engine to ejs
// https://scotch.io/tutorials/use-ejs-to-template-your-node-application
app.set('view engine', 'ejs');

// const Sonus = require('sonus')
// const speech = require('@google-cloud/speech')({
// 	projectId: 'alice-a6da4',
// 	keyFilename: './Alice-d015f8f92987.json'
// })

// const hotwords = [{ file: './resources/Alice.pmdl', hotword: 'Alice' }]
// const sonus = Sonus.init({ hotwords }, speech)

// const commands = {
//   'hello': function () {
//     console.log('You will obey');
//   },
//   '(give me) :flavor ice cream': function (flavor) {
//     console.log('Fetching some ' + flavor + ' ice ceam for you sr')
//   },
//   'turn (the)(lights) :state (the)(lights)': function (state) {
//     console.log('Turning the lights', (state == 'on') ? state : 'off')
//   }
// }

// Sonus.annyang.addCommands(commands)

// Sonus.start(sonus)
// console.log('Say "' + hotwords[0].hotword + '"...')
// sonus.on('hotword', (index, keyword) => console.log("!" + keyword))
// sonus.on('partial-result', result => console.log("Partial", result))

// sonus.on('final-result', result => {
//   console.log("Final", result)
//   if (result.includes("stop")) {
//     Sonus.stop()
//   }
// })
app.use(express.static('./resources'));
app.get('/', function(req, res){
    res.render('pages/index');
});
app.listen(8080, 'localhost');
console.log('Server running at http://localhost:8080/');