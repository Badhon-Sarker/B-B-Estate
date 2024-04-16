import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Log Out");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const links = (
    <div className="flex gap-2 flex-col lg:flex-row font-semibold lg:text-xl">
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/updateprofile"}>Update Profile</NavLink>
      </li>
      <li>
        <NavLink to={"/aboutus"}>About Us</NavLink>
      </li>
    </div>
  );
  return (
    <div className="navbar bg-base-100 font-poppins">
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
            className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
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
          <div className="flex items-center gap-1">
            <div>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar tooltip tooltip-left" data-tip={user?.displayName}
              >
                <div className="w-10 rounded-full">
                  {user ? (
                    <img alt="No Image" src={user.photoURL} />
                  ) : (
                    <img alt="No Image" />
                  )}
                </div>
              </div>
            </div>

            <div>
              <NavLink onClick={handleLogOut} className="btn">
                LogOut
              </NavLink>
            </div>
          </div>
        ) : 
        (
          <div>
            <NavLink to={"/login"} className="btn">
              Login
            </NavLink>
          </div>
        )}

        
      </div>
        
      </div>
    
  );
};

// {
/* <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-1">
            <div>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  {user ? (
                    <img alt="No Image" src={user.photoURL} />
                  ) : (
                    <img alt="No Image" />
                  )}
                </div>
              </div>
            </div>

            <div>
              <NavLink onClick={handleLogOut} className="btn">
                LogOut
              </NavLink>
            </div>
          </div>
        ) : 
        (
          <div>
            <NavLink to={"/login"} className="btn">
              Login
            </NavLink>
          </div>
        )}

        <ToastContainer />
      </div> */
// }

// {
// {
  /* <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-1 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
  <h1>Hey</h1>
</div>; */
// }

// }
// {
//   user ? (<div className="flex gap-1">
//   <div
//     tabIndex={0}
//     role="button"
//     className="btn btn-ghost btn-circle avatar"
//   >

//    <div className="w-10 rounded-full">
//    {
//      user ? <img
//         alt="No Image"

//         src={user.photoURL}
//       /> : <img
//       alt="No Image" />
//       } </div>

//    </div>
//    </div>
//   </div>

// <img
// alt="Tailwind CSS Navbar component"
// src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
// />

//   <div>
//     <NavLink onClick={handleLogOut} className="btn">
//       LogOut
//     </NavLink>

//   </div>
// </div>) : (<div>
//<NavLink to={"/login"} className="btn">
//     Login
//   </NavLink>
// </div>)
//  }


// {user ? ( 
//   <div className="flex  gap-1">
//     <div className="tooltip tooltip-left" data-tip={user?.displayName}>
//       <div
//         tabIndex={0}
//         role="button"
//         className="btn btn-ghost btn-circle avatar "
//       >
//         <div className="w-10 rounded-full">
//           {user ? (
//             <div className="relative overflow-hidden">
//               <img alt="No Image" src={user.photoURL} />
//             </div>
//           ) : (
//             <img alt="No Image" />
//           )}
//         </div>
//       </div>

//       <div>
//         <NavLink onClick={handleLogOut} className="btn">
//           LogOut
//         </NavLink>
//       </div>
//     </div>
//   </div>
  
// ) : (
//   <div>
//     <NavLink to={"/login"} className="btn">
//       Login
//     </NavLink>
//   </div>
// )}

export default Navbar;
