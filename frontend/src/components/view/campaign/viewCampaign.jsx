import FAQ from '../commonComponents/faq'
import Menu from '../commonComponents/menu'
import Donor from './donor'
import Finance from './finance'
import Overview from './overview'
import './viewCampaign.scss'

import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


function ViewCampaign(){

  const LastUrlSegment = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];
    return lastSegment
  };

  const campaignId = LastUrlSegment();

  const [campaign, setCampaign] = useState([]);

  const fetchCampaign = async () => {
    try {
      // setLoading(true);
      const response = await fetch(`http://localhost:5000/api/campaign/${campaignId}`);
      const res = await response.json();

      setCampaign(res);
    }
    finally {
      // setLoading(false);
    }
  }

  useEffect(() => {
    fetchCampaign();
  }, []);

  let campaignTitle = 'Default Title';
  let campaignType = '';
  let campaignCategory = '';
  let fundAmount = 0;
  let raisedAmount = 0;
  let campaignCreated = '';
  let campaignDescription = 'No Description';
  let coverImage = '';

  if(campaign) {
    campaignTitle = campaign.title;
    campaignCategory = campaign.category;
    campaignType = campaign.campaignType;
    campaignDescription = campaign.description;
    coverImage = campaign.coverImage;

    if(campaign.fundInformation) {
      fundAmount = campaign.fundInformation.amount;
    }

    const temp = String(campaign.createdAt);

    campaignCreated = temp.split('T');
    campaignCreated = campaignCreated[0];

  }

  const percentage = (raisedAmount / fundAmount) * 100 ;

  return (
    <div className='viewCampaign'>
        {/* Overview section is in overview.jsx file */}
        <div className="viewCampaign__overview">
          <Overview
            thumbnailSrc={`/coverImages/${coverImage}`}
            category={campaignCategory} type={campaignType}
            title={campaignTitle}
            ownerProfilePicSrc={"/images/akib.png"}
            ownerName={"Akibur Rahman"}
            ownerCampaigns={2}
            ownerAddress={"Chittagong, Bangladesh"}
            target={`${fundAmount}`}
            createdAt={campaignCreated}
          />
        </div>

        {/* Finance section is in finance.jsx file */}
        <div className="viewCampaign__finance">
          <Finance
            raisedPercentage={percentage}
            remainingDays={17}
            donationGoal={fundAmount}
            raisedAmount={raisedAmount}
          />
        </div>

        {/* Details section is in this file */} {/* Yet to configure this section */}
        <div className="viewCampaign__details">
            <div className="details" id='details'>
              <Menu isFor={"campaign"}/>
              <div id="description" className='description'>
                <pre>{campaignDescription}</pre>
                <FAQ/> 
              </div>
            </div>
            <div className="top-donors">
                <h3 className="title">Top Donors</h3>
                <div className="donors">
                        <Donor name={"Shafayet Nur"} address={"Chittagong, BD"} profilePicSrc={"./../../images/shafayet.png"}/>
                        <Donor name={"Akif Shaharier"} address={"Sandwip, BD"} profilePicSrc={"./../../images/akif.jpg"}/>
                        <Donor name={"Md. Akibur Rahman"} address={"Dhaka, BD"} profilePicSrc={"./../../images/akib.png"}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewCampaign