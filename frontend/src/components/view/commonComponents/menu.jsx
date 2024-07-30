import './menu.scss'

function Menu({isFor}){
  if(isFor=="business") { //menu for business post
    return (
      <div className='menu' id='menu'>
          <a href="#overview" className='menuItem active'>Overview</a>
          <a href="#team" className='menuItem'>Team</a>
          <a href="#serviceDetails" className='menuItem'>Service Details</a>
          <a href="#opportunity" className='menuItem'>Opportunity</a>
          <a href="#faq" className='menuItem'>FAQ</a>
      </div>
    )
  }
  else if(isFor=="campaign") {
    return (
      <div className='menu'>
          <a href="#details" className='menuItem active'>Description</a>
          <a href="#faq" className='menuItem'>FAQ</a>
      </div>
    )
  }
}

export default Menu