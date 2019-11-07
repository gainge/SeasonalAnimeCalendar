import React, { Component } from 'react'

import './Home.css';

import WeeklyReleaseSchedule from '../components/WeeklyReleaseSchedule';
import SeasonalSearch from '../components/SeasonalSearch';
import ErrorModal from '../components/ErrorModal';

export default class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      seasonTitle: '',
      seasonal: [],
      viewing: [],
      error: false,
      errorMessage: ''
    }
  }

  fetchSeasonalAnime = () => {
    if (this.state.seasonal.length) return; // Don't do extra work

    fetch('https://api.jikan.moe/v3/season/2019/fall')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({ 
            seasonal: result.anime, 
            seasonTitle: `${result.season_name} ${result.season_year}` 
          });
        },
        (error) => {
          this.setState({ error: true, errorMessage: error });
        }
      )
  }


  onSearchResults = (results) => {
    this.setState({ viewing: results });

    // Attempt to fetch seasonal data
    this.fetchSeasonalAnime();
  }

  onCloseModal = () => {
    this.setState({ error: null });
  }
  

  render() {
    // determine what content will be shown on the page
    let pageContent;
    if (this.state.viewing.length && this.state.seasonal.length) {
      pageContent = <WeeklyReleaseSchedule seasonal={this.state.seasonal} viewing={this.state.viewing} />
    }

    return (
      <div id="content">
        <div id="header">
          <h1>Seasonal Anime</h1>
          <h3>{this.state.seasonTitle}</h3>
        </div>
        <SeasonalSearch onResult={this.onSearchResults} />
        {pageContent}

        <ErrorModal 
          isOpen={this.state.error}
          onCloseModal={this.onCloseModal}
          errorMessage={this.state.error}
        />
      </div>
    )
  }
}


