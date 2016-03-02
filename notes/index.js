var express = require('express'); //injects into dependencies
var bodyParser = require('body-parser'); //injects into dependencies

var users = [{
  name: 'Jerry Seinfeld',
  city: 'New York',
}, {
  name: 'Neuman',
  city: 'New York'
}];

var app = express(); //invokes the function

app.use(bodyParser.json()); //.use works for every method, we're not defining a specific route here,
                            //so it will run on every single request

app.get('/users', function(req, res, next) {
  res.status(200).send(users);  //or .json(users) -- sends as json, turns undefined/null into an empty object
})

app.post('/users', function(req, res, next) { //registers an endpoint of code to be run if matches those two things
    users.push(req.body);
    res.status(200).json(users[users.length -1]);      //sets status of body to 200, then sends body back
                                             //request, response, next -- just parameters, name them whatever you want
});

// app.put('/users', function(req, res, next) {
//
// })

app.delete('/users', function(req, res, next) {
  var deletedUser = users.pop();
  res.status(200).json(deletedUser);
});

app.listen(3000);       //continually running
