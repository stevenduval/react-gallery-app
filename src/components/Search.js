import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Search extends Component { 
  // fetch images when search component is fully mounted
  componentDidMount() {
    // set param value depdending upon if its a navLink or if its from the /search path
    this.props.match.params.id = (!this.props.match.params.id) ? this.props.match.path.split('/')[1] : this.props.match.params.id;
    this.props.fetchImages(this.props.match.params.id );
  }
  // fetch images when search component is updated (used for NavLinks and preserving forward and backward browser actions)
  componentDidUpdate(prevProps) {
    // set param value depdending upon if its a navLink or if its from the /search path 
    this.props.match.params.id = (!this.props.match.params.id) ? this.props.match.path.split('/')[1] : this.props.match.params.id;
    // if current url params do not match previous url params fetch new images
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.fetchImages(this.props.match.params.id);
    }
  }
  // fetch images when search input is submitted
  handleSubmit = (e) => {
    // prevent form submission
    e.preventDefault();
    // fetch new images
    this.props.fetchImages(this.query.value);
    // update history and push to new url
    this.props.history.push(`/search/${this.query.value}`); 
  }
  // render and return the search form
  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input type="search" name="search" placeholder="Search" ref={(input) => this.query = input} required/>
        <button type="submit" className="search-button">
          <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </button>
      </form>
    );
  }
}
// export component so it can be used elsewhere
// withRouter allows for the passing along of match, location and history props
export default withRouter(Search);