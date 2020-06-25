import React, { Component } from 'react';
import './css/index.css';
import axios from 'axios';
import apiKey from "./config"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// import App components
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import Error from './components/Error'

// main app component
class App extends Component {
  // create state to manage results, terms and loading message
  state = {
      searchTerm: '',
      searchResults: [],
      loading: ''
  }
  // call to flickr api
  fetchImages = (term) => {
    this.setState({loading: true});
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&safe_search=1&content_type=1&format=json&tags=${term}&per_page=24&nojsoncallback=1`)
      // set states upon successful response
      .then( response => {
        this.setState({
          searchTerm: term,
          searchResults: response.data.photos.photo,
          loading: false
        });
      })
      // throw error if unsuccessful
      .catch( error => {
        console.log('Error fetching data: ', error);
      })
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          {/* setup routes for the react app */}
          <Switch>
            {/* redirect all users to puppies when app first loads */}
            <Route exact path="/" >
              <Redirect to="/puppies" />
            </Route>
            {/* route to display components if url is '/term' or '/search/term' */}
            <Route exact path={["/puppies", "/sunsets", "/summer", "/search/:id"]}>
                <Search fetchImages={this.fetchImages} /> 
                <Nav /> 
                {(this.state.loading) ? <p>Loading...</p> : <PhotoContainer results={this.state.searchResults} term={this.state.searchTerm}/> }
            </Route>
            {/* route if path does not match one of the above */}
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
// export component so it can be used elsewhere
export default App;
