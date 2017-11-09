import React from 'react';

const Repo = ({repo}) => (
  <div className="repo">
    {/*Design repo object*/}
    <h4>{repo.repoName}</h4>
    <h5>By: {repo.ownerLogin}</h5>
    <h6>{repo.htmlUrl}</h6>
  </div>
)

export default Repo;

// repoId: object.id, repoName: object.name, ownerId: object.owner.id, ownerLogin: object.owner.login, stars: object.stargazers_count, htmlUrl: object.html_url