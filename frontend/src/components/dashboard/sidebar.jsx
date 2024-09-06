import { Icon } from '@iconify-icon/react';
import './sidebar.scss';

import { Link } from 'react-router-dom';

function Sidebar(){
  return (
    <div className='sidebar'>
      <Link className="sidebar__dashboard sidebar__item" to='overview'>
          <Icon icon='ri:dashboard-fill' className='icon'/>
          <span>Dashboard</span>
      </Link>
      <Link className="sidebar__profile sidebar__item" to='profile'>
          <Icon icon='fluent:person-24-filled' className='icon'/>
          <span>Profile</span>
      </Link>
      <Link className="sidebar__campaings sidebar__item" to='campaigns'>
          <Icon icon='material-symbols:campaign' className='icon'/>
          <span>Campaigns</span>
      </Link>
      <Link className="sidebar__businesses sidebar__item" to='businesses'>
          <Icon icon='ic:round-business-center' className='icon'/>
          <span>Businesses</span>
      </Link>
    </div>
  )
}

export default Sidebar