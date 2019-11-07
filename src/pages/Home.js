import React, { Component } from 'react'

import WeeklyReleaseSchedule from '../components/WeeklyReleaseSchedule';
import SeasonalSearch from '../components/SeasonalSearch';

export default class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      seasonTitle: '',
      seasonal: [],
      viewing: []
    }
  }

  componentDidMount() {
    // fetch('https://api.jikan.moe/v3/season/2019/fall')
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({ 
    //         seasonal: result.anime, 
    //         seasonTitle: `${result.season_name} ${result.season_year}` 
    //       });
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   )
  }

  onSearchResults = (results) => {
    this.setState({ viewing: results });
  }
  

  render() {
    // determine what content will be shown on the page
    let pageContent;
    if (this.state.viewing.length && this.state.seasonal.length) {
      pageContent = <WeeklyReleaseSchedule />
    } else {
      pageContent = <SeasonalSearch onResult={this.onSearchResults} />
    }

    return (
      <div>
        <p>Test Test</p>
        {pageContent}
      </div>
    )
  }
}


