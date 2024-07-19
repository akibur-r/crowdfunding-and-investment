import "./layout.scss";
import "./utility.scss";
import Navbar from "./components/navbar/navbar";
import Campaigns from "./routes/home/campaigns";

import Homepage from "./routes/home/homepage";

function App() {
  return (
    <div className="layout">
      <div className="Navbar">
        <Navbar/>
      </div>
      <div className="content">
        <Homepage/>
        <Campaigns/>
      </div>
    </div>
  )
}

export default App;
