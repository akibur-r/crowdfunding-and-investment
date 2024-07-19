import './statsCard.scss'
import { Icon } from '@iconify-icon/react';

function StatsCard({type, titleLine1, titleLine2, amount, icon}){

if(amount==0) {
    amount = "N/A";
}

  return (
    <div className={`statsCard ${type}`}>
        <Icon icon={`${icon}`} className='icon'/>
        <div className="statsCard__content">
            <h1 className="amount">
                {amount}
            </h1>
            <div className="title">{titleLine1} <br />{titleLine2}</div>
        </div>
    </div>
  )
}

export default StatsCard