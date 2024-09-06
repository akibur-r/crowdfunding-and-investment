import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import LinkButton from '../button/linkButton';
import StackedText from '../macro/stackedText';
import './businessCard.scss';
import './card.scss';

function BusinessCard(){
    
  return (
    <div className='businessCard card'>
        <div className="card__content">
            <div className='card__heading'>
                <div className="card__heading__metadata">
                    <div className="category">Primary</div>
                    <Icon icon={"ic:outline-business-center"} className='icon'/>
                </div>
                
                <img src={"./images/bg.jpg"} alt="Cover Image" className='coverImage' />
            </div>
            <div className="card__info">
                <h3 className='title'>This is a title that expands two lines</h3>
                <p className="author">Owner: <span className="authorName">Akif</span></p>
            </div>

            <div className="businessCard__finance">
                    <StackedText 
                        title={"Stock Price"} 
                        amountInMoney={20} 
                        size={"small"} 
                        bgColor={"secondary"}
                    />
                    <StackedText
                        title={"Revenue"} 
                        amountInMoney={"20M"} 
                        size={"small"} 
                        bgColor={"secondary"} 
                    />
                    <StackedText
                        title={"ROI"} 
                        amountInNumber={"10%"} 
                        size={"small"} 
                        bgColor={"secondary"} 
                    />
            </div>
            <div className="businessCard__viewMore">
                <LinkButton 
                    text={"View More"}
                    type={"primary"}
                    size={"small"}
                />
            </div>
        </div>
    </div>
    )}

export default BusinessCard