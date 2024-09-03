import './campaigns.scss'
import DonationCard from '../../components/cards/donationCard'
import { Link } from 'react-router-dom'

function Campaigns(){
  return (
    <div className='home__campaigns'>
        <div className="campaigns-heading">
            <h3 className="title">Crowdfunding Campaigns</h3>
            <h3 className="explore"><Link to="explore">Explore</Link></h3>
        </div>

        <div className="content">
            <DonationCard
                title={"This is a test title: Spans two lines"}
                owner={"Akib"}
                imageSource={"./images/bg.jpg"}
                totalAmount={20}
                raisedAmount={1}
                deadline={20}
                category={"Charity"}
            />
            <DonationCard
                title={"This is a test title: Spans two lines"}
                owner={"Akib"}
                imageSource={"./images/bg.jpg"}
                totalAmount={20}
                raisedAmount={1}
                deadline={20}
                category={"Technology"}
            />
            <DonationCard
                title={"This is a test title: Spans two lines"}
                owner={"Akib"}
                imageSource={"./images/bg.jpg"}
                totalAmount={20}
                raisedAmount={1}
                deadline={20}
                category={"Science"}
            />
            <DonationCard
                title={"This is a test title: Spans two lines"}
                owner={"Akib"}
                imageSource={"./images/bg.jpg"}
                totalAmount={20}
                raisedAmount={1}
                deadline={20}
                category={"Finance"}
            />
            <DonationCard
                title={"This is a test title: Spans two lines"}
                owner={"Akib"}
                imageSource={"./images/bg.jpg"}
                totalAmount={20}
                raisedAmount={1}
                deadline={20}
            />
        </div>
    </div>
  )
}

export default Campaigns