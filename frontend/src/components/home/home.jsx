import { Outlet } from "react-router-dom"
import Navbar from "../navbar/navbar"

function Home(){
  return (
    <div className="layout"> 
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Home