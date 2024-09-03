import { Link } from 'react-router-dom'
import BusinessCard from '../cards/businessCard'
import './businesses.scss'

function Businesses(){
  return (
    <div className='home__businesses'>
        <div className="businesses-heading">
            <h3 className="title">Crowdfunding businesses</h3>
            <h3 className="explore"><Link to="explore">Explore</Link></h3>
        </div>

        <div className="content">
            <BusinessCard
              category={"Primary"}
              imageSource={"./images/bg.jpg"}
              createdAt={20}
            />
            <BusinessCard
              category={"Primary"}
              imageSource={"./images/bg.jpg"}
              createdAt={20}
            />
            <BusinessCard
              category={"Primary"}
              imageSource={"./images/bg.jpg"}
              createdAt={20}
            />
            <BusinessCard
              category={"Primary"}
              imageSource={"./images/bg.jpg"}
              createdAt={20}
            />
            <BusinessCard
              category={"Primary"}
              imageSource={"./images/bg.jpg"}
              createdAt={20}
            />
        </div>
    </div>
  )
}

export default Businesses