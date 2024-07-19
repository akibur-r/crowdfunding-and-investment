import "./layout.scss";
import "./utility.scss";
import Navbar from "./components/navbar/navbar";
import Campaigns from "./routes/home/campaigns";

import Homepage from "./routes/home/homepage";
import DashboardMaster from "./routes/dashboard/dashboardMaster";

function App() {
  return (
    <div className="layout">
      <div className="Navbar">
        <Navbar/>
      </div>
      <div className="content">
        
        <DashboardMaster/>
      </div>
    </div>
  )
}

export default App;
