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
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: '/aboutus',
        element: <PrivateRoute><AboutUs></AboutUs></PrivateRoute>
      }
    ]
  },
]);


 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
