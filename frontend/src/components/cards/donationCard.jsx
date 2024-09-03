import { Link } from 'react-router-dom';
import LinkButton from '../button/linkButton';
import Progressbar from '../progressbar/progressbar';
import './card.scss';
import './donationCard.scss';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';

function DonationCard({title, owner, imageSource, raisedAmount, totalAmount, deadline, category}){

    if(!category) category = "";
    else category = <span className='category'>{category}</span>;
    
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
                <Progressbar progress={20}/>

                <div className="info">
                    <span className="raisedAmount">${raisedAmount} </span>
                    raised out of
                    <span className="totalAmount"> ${totalAmount}</span>
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
                    href={"#"}
                    size={"small"}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DonationCard