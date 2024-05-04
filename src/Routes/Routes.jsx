import { createBrowserRouter } from "react-router-dom"
import Layout from "../Layout/Layout"
import Errors from "../Pages/Errors"
import Home from "../Pages/Home/Home"


const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <Errors/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        
      ],
    },
    
  ])


export default Routes