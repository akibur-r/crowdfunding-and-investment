import './donor.scss'

function Donor({name, address, profilePicSrc}){
  return (
    <div className='donor'>
        <div className="donor__profile-pic">
            <img src={profilePicSrc} alt="" />
        </div>
        <div className="donor__details">
            <h4 className="donor__name">{name}</h4>
            <div className="donor__address">{address}</div>
        </div>
    </div>
  )
}

export default Donor