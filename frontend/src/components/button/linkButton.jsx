import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import './linkButton.scss'

function LinkButton({text, type, href, size, icon}){
  let placeIcon;
  if(icon) placeIcon = <Icon icon={`${icon}`} className='linkButton__icon'/>;
  
  return (
    <a 
    className={`'.LinkButton' ${type} ${size}`} 
    href={href}>
        
    {/*button content*/} {text}
    {/*button icon*/} {placeIcon}
    </a>
  )
}

export default LinkButton