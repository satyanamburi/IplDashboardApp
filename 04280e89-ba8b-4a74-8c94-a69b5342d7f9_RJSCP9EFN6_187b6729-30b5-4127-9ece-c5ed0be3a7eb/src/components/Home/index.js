// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {isLoading: true, iplTeams: []}

  componentDidMount = () => {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const teamsList = await fetch('https://apis.ccbp.in/ipl')
    const data = await teamsList.json()
    const teamName = data.teams
    const matches = teamName.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({isLoading: false, iplTeams: matches})
  }

  render() {
    const {isLoading, iplTeams} = this.state

    return (
      <div className="ipl_container">
        <div className="head">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="stadium_img"
            alt="ipl logo"
          />
          <h1 className="title">IPL Dashboard</h1>
        </div>
        <div className="iplTeams">
          {isLoading ? (
            <div testid="loader">
              {' '}
              <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
            </div>
          ) : (
            iplTeams.map(each => <TeamCard key={each.id} team={each} />)
          )}
        </div>
      </div>
    )
  }
}

export default Home
