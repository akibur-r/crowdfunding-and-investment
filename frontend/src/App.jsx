import "./layout.scss";
import "./utility.scss";
import Navbar from "./components/navbar/navbar";
import Signup from './components/auth/signup'

import ViewBusiness from "./components/view/business/viewBusiness";
import ViewCampaign from "./components/view/campaign/viewCampaign";
import Homepage from "./routes/home/homepage";
import Invest from "./components/transaction/invest";
import AlertTest from "./components/alert/alertTest";
import RequestSuccessAlert from "./components/alert/requestSuccessAlert";
import RequestFailedAlert from "./components/alert/requestFailedAlert";
import PublishedAlert from "./components/alert/publishedAlert";
import PaymentSuccessful from "./components/alert/paymentSuccessful";
import PaymentFailed from "./components/alert/paymentFailed";

function App() {
  return (
    <div className="layout">
      <div className="Navbar">
        <Navbar/>
      </div>
      <div className="content">
        <PaymentFailed/>
      </div>
    </div>
  )
}

export default App;
