import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, matchDetails: {}}

  componentDidMount = () => {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const team = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const matchDetails = await team.json()
    const teamBanner = matchDetails.team_banner_url
    const latestMatchDetails = matchDetails.latest_match_details
    const recentMatches = matchDetails.recent_matches

    const list = {...latestMatchDetails}
    this.setState({
      isLoading: false,
      banner: teamBanner,
      matchDetails: {...latestMatchDetails},
      recentMatchDetails: recentMatches.slice(0, 6),
      team_id: id,
    })
  }

  render() {
    const {
      isLoading,
      matchDetails,
      banner,
      team_id,
      recentMatchDetails,
    } = this.state
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
      match_status,
    } = {...matchDetails}
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div className={`team_container ${team_id}`}>
            <img src={banner} className="team_banner" alt="team banner" />
            <LatestMatch
              key={team_id}
              team_id={team_id}
              banner={banner}
              matchDetails={matchDetails}
            />
            <ul className="recent_matches_container">
              {recentMatchDetails.map(team => (
                <MatchCard key={team.id} team_details={team} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
