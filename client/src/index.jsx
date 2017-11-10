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

    // get = this.get.bind(this);
  }

  get() {
   $.ajax({
      url: '/repos',
      type: 'GET',
      contentType: 'application/json',
      success: function(data) {
        // data will be the 25 repos
        console.log('Sample Data was "GET"ed: ', data)
        return data;
      }, 
      error: function(err) {
        if (err) {
          console.log('There was an error with GET request');
          console.log(err);
        }
      }
    })
    .then( data => {
      console.log(data);
      this.setState({
        repos: JSON.parse(data)
      });
    });
  }

  componentDidMount() {
    // get request 
    console.log('Component is rendered.  GET request is being sent');
    this.get();

  }

  search(term) {
    console.log(`${term} was searched`);
    // When button is clicked, will send post request to /repos and will be registered on server
    var that = this;
    $.ajax({
      url: '/repos', 
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({username: term}),
      success: function(data) {
        console.log('Properly submitted post request: ', data);
        that.get();
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