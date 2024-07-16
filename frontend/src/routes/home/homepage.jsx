import LinkButton from '../../components/button/button'
import './homepage.scss'

function Homepage(){
  return (
    <div className='homepage'>
      <div className="homepage-bg">
        <img src="./images/bg.jpg" alt="" />
      </div>

      <div className="homepage-content">
        <h1 className='heading'>Kill The Hunger: <br />A Lifesaving Project</h1>
        <LinkButton 
        href={"#"}
        type={"primary"}
        text={"See More"}
        size={"regular"}
        />
      </div>
    </div>
  )
}

export default Homepage