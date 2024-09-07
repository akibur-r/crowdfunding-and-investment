import LinkButton from '../../components/button/linkButton'
import StatsBar from '../../components/macro/statsBar'
import Businesses from './businesses'
import Campaigns from './campaigns'
import Footer from './footer'
import './homepage.scss'

function Homepage(){

  return (
    <div className='homepage'>
      <div className="homepage-home">
        <div className="home-bg">
          <img src="./images/bg.jpg" alt="" />
        </div>

        <div className="home-content">
          <h1 className='heading'>Kill The Hunger: <br />A Lifesaving Project</h1>
          <LinkButton 
          href={"/explore/campaigns/1"}
          type={"primary"}
          text={"See More"}
          size={"regular"}
          />
        </div>
      </div>

      <div className="homepage-stats">
        <StatsBar/>
      </div>

      <div className="homepage-campaigns">
        <Campaigns/>
      </div>

      <div className="homepage-businesses">
        <Businesses/>
      </div>

      <div className="homepage-footer">
        <Footer/>
      </div>
    </div>
  )
}

export default Homepage