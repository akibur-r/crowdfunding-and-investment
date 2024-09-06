import Sidebar from './sidebar'
import Campaigns from './campaigns'
import Dashboard from './dashboard'
import Profile from './profile'
import './dashboardMaster.scss'

function DashboardMaster({outletElement}){
  return (
    <div className='dashboardMaster'>
      <Sidebar/>
      {outletElement}
    </div>
  )
}

export default DashboardMaster