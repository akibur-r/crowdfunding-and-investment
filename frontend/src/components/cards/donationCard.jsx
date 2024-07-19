import LinkButton from '../button/linkButton'
import Progressbar from '../progressbar/progressbar'
import './donationCard.scss'

function DonationCard({title, owner, imageSource, raisedAmount, totalAmount, deadline, category}){
  return (
    <div className='donationCard'>
        <div className="card-content">
            <div className='header'>
                <span className='category'>{category}</span>
                <img src={`${imageSource}`} alt="Campaign Image" />
            </div>
            <div className='card-heading'>
                <h4>{title}</h4>
                <p>Author: <span>{owner}</span></p>
            </div>
            <div className='progress-info'>
                <Progressbar progress={20}/>

                <div className="info">
                    <span className="raisedAmount">${raisedAmount} </span>
                    raised out of
                    <span className="totalAmount"> ${totalAmount}</span>
                </div>
            </div>
            <div className='footer'>
                <div className="deadline">
                    Campaign ends in
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