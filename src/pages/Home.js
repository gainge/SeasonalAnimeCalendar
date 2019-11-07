import React, { Component } from 'react'

import WeeklyReleaseSchedule from '../components/WeeklyReleaseSchedule';
import SeasonalSearch from '../components/SeasonalSearch';

export default class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      seasonal: [],
      viewing: []
    }
  }
  

  render() {
    // determine what content will be shown on the page
    let pageContent;
    if (this.state.viewing && this.state.seasonal) {
      pageContent = <WeeklyReleaseSchedule />
    } else {
      pageContent = <SeasonalSearch />
    }

    return (
      <div>
        <p>Test Test</p>
        {pageContent}
      </div>
    )
  }
}


