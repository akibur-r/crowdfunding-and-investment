import "./layout.scss";
import "./utility.scss";
import Navbar from "./components/navbar/navbar";
import Signup from './components/auth/signup'

import ViewBusiness from "./components/view/business/viewBusiness";
import ViewCampaign from "./components/view/campaign/viewCampaign";
import Homepage from "./routes/home/homepage";
import Invest from "./components/transaction/invest";

function App() {
  return (
    <div className="layout">
      <div className="Navbar">
        <Navbar/>
      </div>
      <div className="content">
        <Invest/>
      </div>
    </div>
  )
}

export default App;
