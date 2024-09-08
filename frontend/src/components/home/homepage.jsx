import { useEffect, useState } from 'react'
import LinkButton from '../../components/button/linkButton'
import StatsBar from '../../components/macro/statsBar'
import Businesses from './businesses'
import Campaigns from './campaigns'
import Footer from './footer'
import './homepage.scss'

function Homepage(){
  // const [loading, setLoading] = useState(false);

  const [campaigns, setCampaigns] = useState([]);

  const fetchCampaigns = async () => {
    try {
      // setLoading(true);
      const response = await fetch('http://localhost:5000/api/campaign/all-campaign');
      const res = await response.json();

      setCampaigns(res);
    }
    finally {
      // setLoading(false);
    }
  }

  useEffect(() => {
    fetchCampaigns();
  }, []);

  // const campaignTitle = campaigns[0].title;

  // console.log(campaigns[0].title);


  return (
    <div className='homepage'>
      <div className="homepage-home">
        {
          // loading ? <>Loading...</> : null
        }
        <div className="home-bg">
          <img src="./images/bg.webp" alt="" />
        </div>
        
          <div className="home-content" >
          <h1 className='heading'>{campaigns[0] ? `${campaigns[0].title}` :  `This is a Default Title: There Is No Data In the Database`}</h1>
          <LinkButton 
          href={campaigns[0] ? `/explore/campaigns/${campaigns[0]._id}` : '/explore/campaigns/1'}
          type={"primary"}
          text={"See More"}
          size={"regular"}
          />
        </div>

      </div>

      <div className="homepage-stats">
        <StatsBar/>
      </div>

      <div className="homepage-campaigns">
        <Campaigns/>
      </div>

      <div className="homepage-businesses">
        <Businesses/>
      </div>

      <div className="homepage-footer">
        <Footer/>
      </div>
    </div>
  )
}

export default Homepage