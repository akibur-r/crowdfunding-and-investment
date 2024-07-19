import Dashboard from './dashboard'
import Sidebar from './sidebar'
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