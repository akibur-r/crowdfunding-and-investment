import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DonationCard from '../../components/cards/donationCard';
import './campaigns.scss';

function Campaigns(){
  const [campaigns, setCampaigns] = useState([]);

  const fetchCampaigns = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/campaign/all-campaign');
      const res = await response.json();

      setCampaigns(res);
    }
    catch (e) {
        console.log(e);
    }
  }

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <div className='home__campaigns'>
        <div className="campaigns-heading">
            <h3 className="title">Crowdfunding Campaigns</h3>
            <h3 className="explore"><Link to="explore">Explore</Link></h3>
        </div>

        <div className="content">
            <DonationCard
                campaignId={campaigns[0] && `${campaigns[0]._id}`}
                owner={"Akib"}
                imageSource={"./images/bg.webp"}
            />
            <DonationCard
                campaignId={campaigns[1] && `${campaigns[1]._id}`}
                owner={"Akib"}
                imageSource={"./coverImages/2.png"}
            />
            <DonationCard
                campaignId={campaigns[2] && `${campaigns[2]._id}`}
                owner={"Akib"}
                imageSource={"./coverImages/1.png"}
            />
            <DonationCard
                campaignId={campaigns[0] && `${campaigns[0]._id}`}
                owner={"Akib"}
                imageSource={"./coverImages/2.png"}
            />
        </div>
    </div>
  )
}

export default Campaigns