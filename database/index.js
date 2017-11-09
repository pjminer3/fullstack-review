const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const Schema = mongoose.Schema; // Reassigns mongoose.Schema => Schema

// schema for individual users
let userSchema = Schema({
  userId: number,
  userName: string,
  userRepos: [{type: Schema.Types.ObjectId, ref: 'Repo'}] // <-- not sure about this line
});

let User = mongoose.model('User', userSchema);


// schema for each individual repo
let repoSchema = Schema({
  // TODO: your schema here!
  repoId: number,
  repoName: string,
  ownerId: {type: Schema.Types.ObjectId, ref: 'User'}, // <-- not sure about this line
  ownerLogin: string,
  stars: number,
  htmlUrl: string
});

let Repo = mongoose.model('Repo', repoSchema);


let save = ( userOrRepo, callback ) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  userOrRepo.save(function(err) {
    if (err) {
      throw err;
    }

    // saved!
  })


}

module.exports.save = save;
// export the class objects
module.exports.User = User;
module.exports.Repo = Repo;