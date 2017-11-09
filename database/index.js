const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const Schema = mongoose.Schema; // Reassigns mongoose.Schema => Schema

// // schema for individual users
// let userSchema = Schema({
//   userId: Number,
//   userName: String,
//   userRepos: String// [{type: Schema.Types.ObjectId, ref: 'Repo'}] // <-- not sure about this line
// });

// let User = mongoose.model('User', userSchema);


// schema for each individual repo
let repoSchema = Schema({
  repoId: Number,
  repoName: String,
  ownerId: Number, //{type: Schema.Types.ObjectId, ref: 'User'}, // <-- not sure about this line
  ownerLogin: String,
  stars: Number,
  htmlUrl: String
});

let Repo = mongoose.model('Repo', repoSchema);


let save = ( repos ) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  repos.forEach( object => {
    let newRepo = new Repo({repoId: object.id, repoName: object.name, ownerId: object.owner.id, ownerLogin: object.owner.login, stars: object.stargazers_count, htmlUrl: object.html_url});
    newRepo.save(function(err) {
      if (err) {
        throw err;
      }
    })
  })
}


// let get25TopRepos = (req, res) => {
//   console.log('get25TopRepos was called!');
//   /* Querries DB for 25 top repos:
//     I: None
//     O: An array of repo objects from the mongo DB
//     C: Limit to 25 repos
//     E: none 
//   */
//   // finds the 25 repos with the most stars, and then passes them into the render callback callback
//   Repo.find( err => {
//     if (err) {
//       throw err
//     }
//   })
//   .limit(25)
//   .sort({stargazers_count: -1})
//   .then(repos => {
//     res.sesnd(JSON.stringify(repos));
//   })
  
// }

module.exports.save = save;
// export the class objects
// module.exports.User = User;
module.exports.Repo = Repo;
// module.exports.get25TopRepos = get25TopRepos;