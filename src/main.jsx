import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Routes/Home/Home.jsx';
import Root from './Routes/Root/Root.jsx';
import Registration from './Routes/Registration/Registration.jsx';
import Login from './Routes/Login/Login.jsx';
import UpdateProfile from './Routes/UpdateProfile/UpdateProfile.jsx';
import AboutUs from './Routes/AboutUs/AboutUs.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>

      },
      {
        path: '/register',
        element: <Registration></Registration>
      },
      {
        path: '/updateprofile',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: '/aboutus',
        element: <AboutUs></AboutUs>
      }
    ]
  },
]);


 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
