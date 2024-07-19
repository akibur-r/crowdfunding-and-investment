import Navbar from "./components/navbar/navbar";
import DonationCard from "./components/cards/donationCard";
import "./layout.scss";

import Homepage from "./routes/home/homepage";
import StatsBar from "./routes/home/statsBar"

function App() {
  return (
    <div className="layout">
      <div className="Navbar">
        <Navbar/>
      </div>
      <div className="content">
        
      </div>
    </div>
  )
}

export default App;
