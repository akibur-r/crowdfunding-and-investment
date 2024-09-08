import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { useEffect, useState } from 'react';
import LinkButton from '../button/linkButton';
import Progressbar from '../progressbar/progressbar';
import './card.scss';
import './donationCard.scss';

function DonationCard({owner, imageSource, campaignId}){

    const [campaign, setCampaign] = useState(false);

  const fetchCampaign = async () => {
      const response = await fetch(`http://localhost:5000/api/campaign/${campaignId}`);
      const res = await response.json();

      setCampaign(res);
  }

  useEffect(() => {
    fetchCampaign();
  }, []);



    let title = "Undefined Title";
    let deadline = 'N/A';
    let fundAmount = 0;
    let raisedAmount = 90;
    let category = '';
    let percentage = 0;
    if(campaign) {
        title = campaign.title;
        deadline = 20; //this is a dummy value. Have to configure later
        category = <span className='category'>{`${campaign.category}`}</span>;
        
        if(campaign.fundInformation) {
            fundAmount = campaign.fundInformation.amount;
        }


        percentage = (raisedAmount / fundAmount) * 100 ;

        console.log(percentage);

    }
    
  return (
    <div className='donationCard card'>
        <div className="card__content">
            <div className='card__heading'>
                <div className="card__heading__metadata">
                    {category}
                    <Icon icon={"iconoir:donate"} className='icon'/>
                </div>
                <img src={`${imageSource}`} alt="Cover Image" className='coverImage' />
            </div>
            <div className='card__info'>
                <h3 className='title'>{title}</h3>
                <p className='author'>Author: <span className='authorName'>{owner}</span></p>
            </div>
            <div className='progress-info'>
                <Progressbar progress={percentage}/>

                <div className="info">
                    <span className="raisedAmount">${raisedAmount} </span>
                    raised out of
                    <span className="totalAmount"> ${fundAmount} </span>
                </div>
            </div>
            <div className='donationCard__footer'>
                <div className="deadline">
                    Ends in
                    <p>{deadline} days</p>
                </div>

                <div className='button'>
                    <LinkButton 
                    text={"View More"}
                    type={"primary"}
                    href={campaign && `/explore/campaigns/${campaignId}`}
                    size={"small"}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DonationCard