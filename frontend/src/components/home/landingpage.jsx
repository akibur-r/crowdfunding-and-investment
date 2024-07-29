import Homepage from "../../routes/home/homepage"
import Navbar from "../navbar/navbar"

function Landingpage(){
  return (
    <div className='landingpage layout'>
        <Navbar/>
        <Homepage/>
    </div>
  )
}

export default Landingpage