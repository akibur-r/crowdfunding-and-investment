import "./layout.scss";
import "./utility.scss";
import Navbar from "./components/navbar/navbar";
import Signup from './components/auth/signup'

import ViewCampaign from "./components/view/campaign/viewCampaign";
import Homepage from "./routes/home/homepage";

function App() {
  return (
    <div className="layout">
      <div className="Navbar">
        <Navbar/>
      </div>
      <div className="content">
        <Homepage/>
      </div>
    </div>
  )
}

export default App;
