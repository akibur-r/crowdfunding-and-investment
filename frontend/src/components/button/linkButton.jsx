import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import './linkButton.scss'
import {createBrowserRouter, RouterProvider, Link} from 'react-router-dom'

function LinkButton({text, type, href, size, iconBeforeText, iconAfterText, bgFill}){
  let placeIconBeforeText;
  let placeIconAfterText;
  if(iconBeforeText) placeIconBeforeText = <Icon icon={`${iconBeforeText}`} className='linkButton__iconBeforeText'/>;
  if(iconAfterText) placeIconAfterText = <Icon icon={`${iconAfterText}`} className='linkButton__iconAfterText'/>;
  
  return (
    <Link to={href} className=''>

      <div className={`LinkButton LinkButtonbg_${type} size_${size} fill_${bgFill}`} >
        {/*button icon after text*/} {placeIconBeforeText}
        {/*button content*/} <span>{text}</span>
        {/* button icon after text */} {placeIconAfterText}
      </div>

    </Link>
  )
}

export default LinkButton