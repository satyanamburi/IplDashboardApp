// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {matchDetails, team_id, banner} = this.props
    const {
      umpires,
      result,
      man_of_the_match,
      date,
      venue,
      competing_team,
      competing_team_logo,
      first_innings,
      second_innings,
    } = matchDetails
    return (
      <div>
        <h1 className="title1">Latest Matches</h1>
        <div className="latest_matches_container">
          <div className="competetor">
            <div>
              <p>{competing_team}</p>
              <p className="label">{date}</p>
              <p className="label">{venue}</p>
              <p>{result}</p>
            </div>
            <div>
              <img
                src={competing_team_logo}
                className="competing_team_logo"
                alt={`latest match ${competing_team}`}
              />
            </div>
          </div>
          <div className="about_match">
            <hr className="hr_line" />
            <p className="label"> First Innings</p>
            <p>{first_innings}</p>
            <p className="label">Second Innings</p>
            <p>{second_innings}</p>
            <p className="label">Man Of The Match</p>
            <p>{man_of_the_match}</p>
            <p className="label">Umpires</p>
            <p>{umpires}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
