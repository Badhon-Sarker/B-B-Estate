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
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import { HelmetProvider } from 'react-helmet-async';
import "react-toastify/dist/ReactToastify.css";
import toast, { Toaster } from 'react-hot-toast';
import EstateDetails from './Routes/EstateDetails/EstateDetails.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();







const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path: '/aboutus',
        element: <PrivateRoute><AboutUs></AboutUs></PrivateRoute>
      },
      {
        path: '/estates/:id',
        element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
        loader: () => fetch('../estate.json')
        
      }
      
    ]
  },
]);


 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   <HelmetProvider>
   <AuthProvider>
      <RouterProvider router={router} /> 
      <Toaster />
    </AuthProvider>
   </HelmetProvider>

  </React.StrictMode>,
)
