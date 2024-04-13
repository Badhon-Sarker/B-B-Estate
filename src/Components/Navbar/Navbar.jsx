import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(result => {
      toast.success('Succefully logout!')
    })
    .catch(error =>{
      console.error(error)
    })
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/updateprofile"}>Update Profile</NavLink>
      </li>
      <li>
        <NavLink to={"/aboutus"}>About Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="text-xl md:text-2xl lg:text-3xl font-bold">B&B Estate</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-1">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {
                  user ? <img
                  alt="No Image"
                  
                  src={user.photoURL}
                /> : <img
                alt="No Image" />
                }
                
              </div>
            </div>

            <div>
              <NavLink onClick={handleLogOut} className="btn">
                LogOut
              </NavLink>
              
            </div>
          </div>
        ) : (
          <div>
            <NavLink to={"/login"} className="btn">
              Login
            </NavLink>
          </div>
        )}
        <ToastContainer />
       
      </div>
    </div>
  );
};

export default Navbar;
