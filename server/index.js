const db = require('./../database/index');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const gitHelpers = require('./../helpers/github');


app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  let username = req.body.username;
  // and get the repo information from the github API, then
  let repos = gitHelpers.getReposByUsername(username);
  // save the repo information in the database
  

  res.send(repos);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});





