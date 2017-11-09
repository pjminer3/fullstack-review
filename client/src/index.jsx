import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'; // <-- We're not supposed to use jQuery with react
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    // When button is clicked, will send post request to /repos and will be registered on server
    $.ajax({
      url: '/repos', 
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({username: term}),
      success: function(data) {
        console.log('Properly submitted post request: ', data);
      },
      error: function(err) {
        console.log('Post failed: ', err);
      }
    });

  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));