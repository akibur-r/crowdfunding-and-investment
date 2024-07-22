import './viewCampaign.scss'
import Menu from '../commonComponents/menu'
import Test from './test'
import Donor from './donor'
import Finance from './finance'
import Overview from './overview'
import FAQ from '../commonComponents/faq'

function ViewCampaign(){
  return (
    <div className='viewCampaign'>
        {/* Overview section is in overview.jsx file */}
        <div className="viewCampaign__overview">
          <Overview
            thumbnailSrc={"./images/bg.jpg"}
            category={"Charity"} type={"Personal"}
            title={"Kill the Hunger: A Lifesaving Project"}
            ownerProfilePicSrc={"./images/shafayet.png"}
            ownerName={"Shafayet Nur"}
            ownerCampaigns={8}
            ownerAddress={"Chittagong, Bangladesh"}
            target={100000}
            createdAt={"11/12/2013"}
          />
        </div>

        {/* Finance section is in finance.jsx file */}
        <div className="viewCampaign__finance">
          <Finance
            raisedPercentage={20}
            remainingDays={17}
            donationGoal={100000}
            raisedAmount={100}
          />
        </div>

        {/* Details section is in this file */} {/* Yet to configure this section */}
        <div className="viewCampaign__details">
            <div className="details">
              <Menu/>
              <FAQ/> 
            </div>
            <div className="top-donors">
                <h3 className="title">Top Donors</h3>
                <div className="donors">
                        <Donor name={"Shafayet Nur"} address={"Chittagong, BD"} profilePicSrc={"./images/shafayet.png"}/>
                        <Donor name={"Shohan Hyder"} address={"Chandpur, BD"} profilePicSrc={"./images/bg.jpg"}/>
                        <Donor name={"Md. Akibur Rahman"} address={"Dhaka, BD"} profilePicSrc={"./images/akib.png"}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewCampaign