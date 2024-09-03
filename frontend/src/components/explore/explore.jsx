import BusinessCard from '../cards/businessCard'
import DonationCard from '../cards/donationCard'
import './explore.scss'

function Explore(){
  return (
    <div className='explore'>
        <div className="explore__heading">
            <h1 className='title'>Explore</h1>
        </div>
        <div className="explore__filter">
            <ul>
                <li className='active'  >All</li>
                <li>Crowdfunding</li>
                <li>Business</li>
            </ul>
        </div>

        <div className="explore__content">
            <DonationCard 
                title={"This is nice"}
                owner={"Akib"}
                imageSource={"./images/bg.jpg"}
                category={"Test"}
                raisedAmount={20}
                totalAmount={200}
                deadline={37}
            />
            <BusinessCard/>
        </div>
    </div>
  )
}

export default Explore