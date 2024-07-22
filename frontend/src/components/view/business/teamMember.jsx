import './teamMember.scss'

function TeamMember({name, designation, profilePicSrc, keyPerson}){

  let bgcolor;
  if(keyPerson=="YES") bgcolor = "primary";
  else bgcolor = "secondary";

  return (
    <div className={`teamMember bg_${bgcolor}`}>
        <div className="teamMember__profilePic">
            <img src={profilePicSrc} alt="" />
        </div>
        <div className="teamMember__details">
            <h4 className="teamMember__name">{name}</h4>
            <div className="teamMember__designation">{designation}</div>
        </div>
    </div>
  )
}

export default TeamMember