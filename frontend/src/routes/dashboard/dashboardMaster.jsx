import Sidebar from './sidebar'
import Campaigns from './campaigns'
import Dashboard from './dashboard'
import './dashboardMaster.scss'

function DashboardMaster(){
  return (
    <div className='dashboardMaster'>
      <Sidebar/>
      <Dashboard/>
    </div>
  )
}

export default DashboardMaster