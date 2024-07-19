import './styledText.scss'
import { Icon } from '@iconify-icon/react';

function StyledText({icon, title, subtitle}){
  return (
    <div className='styledText' >
        <div className="icon-container">
            <Icon icon={`${icon}`} className='icon'/>
        </div>
        <div className="text-container">
            <h1>{title}</h1>
            <p>{subtitle}</p>       
        </div>
    </div>
  )
}

export default StyledText