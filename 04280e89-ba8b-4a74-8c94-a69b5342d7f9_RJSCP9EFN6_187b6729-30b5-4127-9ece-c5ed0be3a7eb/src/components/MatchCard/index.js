// Write your code here
import './index.css'

const MatchCard = props => {
  const {team_details} = props
  const {
    competing_team,
    competing_team_logo,
    match_status,
    result,
    id,
  } = team_details

  return (
    <li id={id} className="card">
      <img src={competing_team_logo} className="logo" alt={id} />
      <p className="teamName">{competing_team}</p>
      <p>{result}</p>
      <p className={`${match_status}`}>{match_status}</p>
    </li>
  )
}

export default MatchCard
