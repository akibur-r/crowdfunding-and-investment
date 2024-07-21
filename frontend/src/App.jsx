import "./layout.scss";
import "./utility.scss";
import Navbar from "./components/navbar/navbar";

import ViewCampaign from "./components/view/campaign/viewCampaign";

function App() {
  return (
    <div className="layout">
      <div className="Navbar">
        <Navbar/>
      </div>
      <div className="content">
        <ViewCampaign/>
      </div>
    </div>
  )
}

export default App;
