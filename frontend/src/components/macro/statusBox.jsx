import './statusBox.scss'
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';

function StatusBox({type, text, icon}){
let placeIcon;

if(text==0) text = "0";

if(icon) placeIcon = <Icon icon={`${icon}`} className='statusBox__icon'/>;
  return (
    <div className={`statusBox Statusbox__${type}`}>
        {placeIcon} {text}
    </div>
  )
}

export default StatusBox