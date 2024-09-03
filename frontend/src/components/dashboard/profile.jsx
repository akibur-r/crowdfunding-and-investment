import './profile.scss'
import StatsCard from '../../components/cards/statsCard';

function Profile(){
    const amount = 100;
  return (
    <div className='profile'>
        <div className='profile__info'>
            <div className="profile__image"></div>
        </div>
        <div className="profile__stats">
            <StatsCard
                type={"secondary"}
                titleLine1={"Donated"}
                titleLine2={"Total"}
                amount={`$${amount}`}
            />
            <StatsCard
                type={"secondary"}
                titleLine1={"Donated"}
                titleLine2={"Total"}
                amount={100}
            />
            <StatsCard
                type={"secondary"}
                titleLine1={"Donated"}
                titleLine2={"Total"}
                amount={100}
            />
            <StatsCard
                type={"secondary"}
                titleLine1={"Donated"}
                titleLine2={"Total"}
                amount={100}
            />
        </div>
    </div>
  )
}

export default Profile