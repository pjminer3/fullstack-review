const request = require('request');
const config = require('../config.js');

let getReposByUsername = ( username, callback ) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    method: 'GET',
    headers: {
      'User-Agent': 'request',
      'Accept': 'application/json',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, function(err, res, body) {
    let json = JSON.parse(body);
    console.log('this is the parsed body', json);
    return json;
  })
  // TODO: Add callback functionality to this request so we can do something with the actual results

}

module.exports.getReposByUsername = getReposByUsername;