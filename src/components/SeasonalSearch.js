import React, { Component } from 'react'

import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactModal from 'react-modal';

import './SeasonalSearch.css';

// Might want to refactor these into a helper module at some point
const QUERY_IDLE = 0;
const QUERY_PENDING = 1;
const QUERY_ERROR = -1;

const query = `
query ($userName: String) {
  MediaListCollection(
    userName: $userName, 
    type: ANIME,
    status_in: [CURRENT, COMPLETED],
    sort: MEDIA_ID
    ) {
    lists {
      entries {
        media {
          idMal
          id
          title {
            userPreferred
          }
          coverImage {
            large
          }
        }
      }
      isCustomList
      status
    }
  }
}
`

ReactModal.setAppElement('#root');

const customStyles = {
  overlay: {
    backgroundColor: 'transparent',
    padding: 100,
  },
  content: {
    position: 'relative',
    color: 'red',
    boxShadow: '1px 3px 3px #9E9E9E',
    backgroundColor: '#f8f8f8',
  }
};

export default class SeasonalSearch extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      searchTerm: '',
      queryState: QUERY_IDLE,
      error: null,
    }
  }

  onQueryStart = (userName) => {
    const variables = {
      userName
    };

    const url = 'https://graphql.anilist.co';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query,
        variables
      })
    };

    fetch(url, options).then(this.handleResponse)
      .then(this.handleData)
      .catch(this.handleError);

    this.setState({ queryState: QUERY_PENDING });
  }

  handleResponse = (response) => {
    return response.json().then((json) => (response.ok ? json : Promise.reject(json)));
  }

  handleData = (data) => {
    // Obtain lists and filter based on current settings
    let lists = data.data.MediaListCollection.lists;
    lists = lists.filter((list) => (!list.isCustomList && (list.status === 'CURRENT')));
    
    // Grab the actual shows
    let current = lists[0].entries;
    current = current.map((entry) => entry.media);
    
    // Update state
    this.onQuerySuccess(current);
  }
  
  handleError = (error) => {
    this.onQueryError(error);
  }

  onQuerySuccess = (data) => {
    // Pass back up the shows
    // but we'll probably just log for now
    console.log(data);
  }

  onQueryError = (error) => {
    this.setState({ queryState: QUERY_ERROR, error });
  }

  onSearchTermChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  onSearchSubmit = (event) => {
    const username = this.state.searchTerm;

    if (username) {
      this.setState({ queryState: QUERY_PENDING });
      this.onQueryStart(username);
    } else {
      this.setState({ queryState: QUERY_ERROR, error: 'Invalid Search Term' });
    }

    event.preventDefault();
  }

  onCloseModal = () => {
    this.setState({ queryState: QUERY_IDLE });
  }


  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSearchSubmit}>
          <button type="button" onClick={this.onSearchSubmit}>
            <FontAwesomeIcon icon={faSearch} size="2x" style={{ color: 'slate' }} />
          </button>
          <input type="text" value={this.state.searchTerm} onChange={this.onSearchTermChange} id="search-field" placeholder="Anlilist Username" />
        </form>
        <ReactModal 
          isOpen={this.state.queryState === QUERY_ERROR} 
          onRequestClose={this.onCloseModal}
          style={{ overlay: customStyles.overlay, content: customStyles.content }}
          contentLabel="Example Modal"
        >
          <FontAwesomeIcon icon={faTimes} size="2x" style={{ color: 'slate', float: 'right' }} onClick={this.onCloseModal} />
          <p>{this.state.error}</p>
        </ReactModal>
        
      </div>
      
    )
  }
}

