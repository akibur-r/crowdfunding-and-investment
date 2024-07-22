import './businesses.scss'
import DonationCard from '../../components/cards/donationCard'

function Businesses(){
  return (
    <div className='home__businesses'>
        <div className="businesses-heading">
            <h3 className="title">Crowdfunding businesses</h3>
            <h3 className="explore"><a href="#">Explore</a></h3>
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

export default Businesses