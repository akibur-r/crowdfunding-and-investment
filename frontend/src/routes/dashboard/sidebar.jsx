import { Icon } from '@iconify-icon/react';
import './sidebar.scss';

function Sidebar(){
  return (
    <div className='sidebar'>
      <a className="sidebar__dashboard sidebar__item" href='#'>
          <Icon icon='lucide:hand-helping' className='icon'/>
          <span>Dashboard</span>
      </a>
      <a className="sidebar__profile sidebar__item" href='#'>
          <Icon icon='lucide:hand-helping' className='icon'/>
          <span>Profile</span>
      </a>
      <a className="sidebar__campaings sidebar__item" href='#'>
          <Icon icon='lucide:hand-helping' className='icon'/>
          <span>Campaigns</span>
      </a>
      <a className="sidebar__businesses sidebar__item" href='#'>
          <Icon icon='lucide:hand-helping' className='icon'/>
          <span>Businesses</span>
      </a>
    </div>
  )
}

export default Sidebar