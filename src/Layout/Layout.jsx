import { Outlet } from "react-router-dom"
import Footer from "../Pages/Shared/Footer/Footer"
import Navbar from "../Pages/Shared/Navbar/Navbar"



const Layout = () => {

  return (
    <>
    <Navbar/>
    <div className="pt-24 min-h-screen">

     <Outlet/>

      </div>
     <Footer/>
    </>
  )
}

export default Layout