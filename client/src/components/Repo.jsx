import React from 'react';

const Repo = ({repo}) => (
  <div className="repo">
    <h5>
      <a href={repo.htmlUrl}>{repo.ownerLogin}: {repo.repoName}</a>
    </h5>
  </div>
)

export default Repo;

// repoId: object.id, repoName: object.name, ownerId: object.owner.id, ownerLogin: object.owner.login, stars: object.stargazers_count, htmlUrl: object.html_url