// Write your code here
// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {team} = props
  const {id, name, teamImageUrl} = team

  return (
    <Link to={`/ipl/${id}`}>
      <div id={id} className="ipl_team">
        <img src={teamImageUrl} className="ipl_logo" alt={name} />
        <p className="name">{name}</p>
      </div>
    </Link>
  )
}

export default TeamCard
