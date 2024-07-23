import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
import './alertMessage.scss'
import LinkButton from '../button/linkButton'

function AlertMessage({message, detailsLine1, detailsLine2, icon, iconColor, btn1Text, btn1href, btn2Text, btn2href, btnType, btnSize}){

    if(detailsLine1) detailsLine1 = <span className='line1'>{detailsLine1}</span>;
    if(detailsLine2) detailsLine2 = <span className='line2'>{detailsLine2}</span>;

    let btn1;
    let btn2;
    if(btn1href) {
        btn1 = 
            <LinkButton
                text={btn1Text}
                href={btn1href}
                type={btnType}
                size={btnSize}
                bgFill={"bg"}
            />
    }
    if(btn2href) {
        btn2 = 
            <LinkButton
                text={btn2Text}
                href={btn2href}
                type={btnType}
                size={btnSize}
                bgFill={"outline"}
            />
    }

  return (
    <div className='alertMessage'>
        <div className={`icon icon_${iconColor}`}>
            <Icon icon={icon} />
        </div>
        <div className="alert">
            <h3 className="alertContent">{message}</h3>
            <div className="alertDetails">
                {detailsLine1}
                {detailsLine2}
            </div>
        </div>
        <div className="buttons">
            {btn1}
            {btn2}
        </div>
    </div>
  )
}

export default AlertMessage