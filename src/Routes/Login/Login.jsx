import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

  const {loginUser, googleLogin, githubLogin} = useContext(AuthContext)
  const [loginErr , setLoginErr] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogleLogin = () =>{
    googleLogin()
    .then(result =>{
     
     navigate(location?.state? location.state : '/')
    })
    .catch(error =>{
      console.error(error.message)

    })
 }


 const handleGithubLogin = () =>{
  
  githubLogin()
  .then(result =>{
   
   navigate(location?.state? location.state : '/')
  })
  .catch(error =>{
    console.error(error.message)

  })
}

  const onSubmit = (data) => {
    

    const email = data.loginEmail;
    const password = data.loginPassword;

   
    

    loginUser(email, password)
    .then(result => {
      

      // {
      //   location?.state? <Navigate to={location.state}></Navigate> : <Navigate to={'/'}></Navigate>
      // }
      
       navigate(location?.state? location.state : '/')
      
      
    })
    .catch(error => {
      toast.error('Invalid credential')
    })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                {...register("loginEmail", { required: true })}
              />
              {errors.loginEmail && <span className="text-red-500">*This field is required</span>}
            
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                {...register("loginPassword", { required: true })}
              />
              {errors.loginPassword && <span className="text-red-500">*This field is required</span>}
              <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
              {loginErr && <span className="text-red-500">{loginErr}</span>}
              
            <div className="form-control">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="text-sm mt-2">New here? <NavLink to={'/register'}>Create account</NavLink></div>
            </div>
            <hr />
            <div className="flex justify-center gap-1">
                <div><button onClick={ () => {handleGoogleLogin()}} className="btn rounded-full"><FcGoogle /></button></div>
                <div><button onClick={ () => {handleGithubLogin()}} className="btn rounded-full"><BsGithub /></button></div>
            </div>
            <hr />
            
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
   
  );
};

export default Login;
