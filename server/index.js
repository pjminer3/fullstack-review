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

  gitHelpers.getReposByUsername(username, db.save); // do I add a next function?
  

  res.send('Post was successful');
});

app.get('/repos', function (req, res) {
  console.log('Hello from GET function of server');
  // This route should send back the top 25 repos

  // this function is defined at the bottom of this file
  get25TopRepos(req, res);

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});



function get25TopRepos (req, res) {
  console.log('get25TopRepos was called!');
  /* Querries DB for 25 top repos:
    I: None
    O: An array of repo objects from the mongo DB
    C: Limit to 25 repos
    E: none 
  */
  // finds the 25 repos with the most stars, and then passes them into the render callback callback
  db.Repo.find( err => {
    if (err) {
      throw err
    }
  })
  .limit(25)
  .sort({stars: -1})
  .then(repos => {
    res.send(JSON.stringify(repos));
  });
}

