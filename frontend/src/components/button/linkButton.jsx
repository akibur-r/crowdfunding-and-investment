import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import './linkButton.scss'

function LinkButton({text, type, href, size, iconBeforeText, iconAfterText}){
  let placeIconBeforeText;
  let placeIconAfterText;
  if(iconBeforeText) placeIconBeforeText = <Icon icon={`${iconBeforeText}`} className='linkButton__iconBeforeText'/>;
  if(iconAfterText) placeIconAfterText = <Icon icon={`${iconAfterText}`} className='linkButton__iconAfterText'/>;
  
  return (
    <a 
    className={`'.LinkButton' ${type} ${size}`} 
    href={href}>
        
    {/*button icon after text*/} {placeIconBeforeText}
    {/*button content*/} {text}
    {/*button icon after text*/} {placeIconAfterText}
    </a>
  )
}

export default LinkButton