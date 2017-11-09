import React from 'react';

const Repo = ({repo}) => (
  <div>
    {/*Design repo object*/}
    <h5>{repo.repoName}</h5><br/>
    <h6>By: {repo.ownerLogin}</h6><br/>
    <p>{repo.htmlUrl}</p>
  </div>
)

export default Repo;

// repoId: object.id, repoName: object.name, ownerId: object.owner.id, ownerLogin: object.owner.login, stars: object.stargazers_count, htmlUrl: object.html_url