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
                campaignId={'66dd674a9c495d83bb4b9301'}
                owner={"Akib"}
                imageSource={"./images/bg.jpg"}
            />
        </div>
    </div>
  )
}

export default Campaigns