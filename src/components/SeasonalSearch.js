import React, { Component } from 'react'

import './SeasonalSearch.css';

// Might want to refactor these into a helper module at some point
const QUERY_IDLE = 0;
const QUERY_PENDING = 1;
const QUERY_SUCCESSFUL = 2;
const QUERY_ERROR = 3;

export default class SeasonalSearch extends Component {

  renderChild = (renderState) => {
    switch (renderState) {
      case QUERY_PENDING:
        return <p>pending...</p>
      case QUERY_ERROR:
        return <p>error!</p>
      case QUERY_SUCCESSFUL:
        return <p>Here's the data lul</p>
      case QUERY_IDLE:
      default:
        return <p>Idle</p>      
    }
  }


  onQueryStart = () => {
    this.setState({ queryState: QUERY_PENDING });
  }

  onQuerySuccess = (data) => {
    this.setState({ queryState: QUERY_SUCCESSFUL, currentlyWatching: data });
  }

  onQueryError = (error) => {
    this.setState({ queryState: QUERY_ERROR });
  }


  render() {
    return (
      <div>
        <p>{this.renderChild('hmmm')}</p>
      </div>
    )
  }
}
