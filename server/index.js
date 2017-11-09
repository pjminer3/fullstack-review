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
  // save the repo information in the database

  //gitHelpers.getReposByUsername(username, db.save); // do I add a next function?
  

  res.send('Post was successful');
});

app.get('/repos', function (req, res) {
  console.log('Hello from GET function of server');
  // TODO - your code here!
  // This route should send back the top 25 repos
// JSON.stringify([{repoId: 'SampleID', repoName: 'Sample Name', ownerId: 'Sample Owner Id', ownerLogin: 'Sample Login', stars: '5', htmlUrl: 'www.helloWorld.com'}])
  res.send(JSON.stringify(([{repoId: 'SampleID', repoName: 'Sample Name', ownerId: 'Sample Owner Id', ownerLogin: 'Sample Login', stars: '5', htmlUrl: 'www.helloWorld.com'}])));

  // query the database for the 25 dankest repos

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});





