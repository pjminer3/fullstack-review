import React from 'react';
import Repo from './Repo.jsx';

const RepoList = (props) => (
  <div>
    {console.log('THE PROPS', props)}
    <h4> Repo List Component </h4>
    <p>There are {props.repos.length} repos.</p>
    { props.repos.map( (repo, index) => (<Repo repo={repo} key={index}/>)) }
  </div>
)



export default RepoList;