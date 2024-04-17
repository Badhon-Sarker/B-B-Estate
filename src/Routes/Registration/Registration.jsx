import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Helmet } from "react-helmet-async";

const Registration = () => {
  const { registerUser, profileUpdate } = useContext(AuthContext);
  const [showPassword , setShowPassword] = useState(false)
  const [passErr, setPassErr] = useState(null);


  const show = showPassword


  const isUpperCaseIncluded = (password) => {
    return /[A-Z]/.test(password);
  };

  const isLowerCaseIncluded = (password) => {
    return /[a-z]/.test(password);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  

  const onSubmit = (data) => {
    
    const name = data.registerName;
    const image = data.registerPhotoURL;
    const email = data.registerEmail;
    const password = data.registerPassword;

    if (password.length < 6) {
      setPassErr("");
      return setPassErr("Password must have 6 characters");
    }

    if (!isUpperCaseIncluded(password)) {
      setPassErr("");
      return setPassErr("Password must have at least one Uppercase");
    }

    if (!isLowerCaseIncluded(password)) {
      setPassErr("");
      return setPassErr("Password must have at least one Lowercase");
    }

    registerUser(email, password)
      .then((result) => {
        profileUpdate(name, image);
        toast.success("Account has been created!");
        navigate('/')
      })
      .catch((error) => {
        console.error(error);
      });


      const handleShowpassword = (showPassword) =>{

        setShowPassword(!showPassword)
      }
  };

  return (
    <div className="hero min-h-screen bg-base-200 font-poppins">
      <Helmet><title>Register</title></Helmet>
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 data-aos="fade-down" data-aos-duration="1000" className="text-5xl font-bold">Register now!</h1>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000" className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body px-1">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered"
                {...register("registerName", { required: true })}
              />
              {errors.registerName && (
                <span className="text-red-500">*This field is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                placeholder="Your photoURL"
                className="input input-bordered"
                {...register("registerPhotoURL")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                {...register("registerEmail", { required: true })}
              />
              {errors.registerEmail && (
                <span className="text-red-500">*This field is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex relative">
                <div className="flex flex-grow">
                  <input
                   
                     type={show? "text" : "password"}
                    
                    placeholder="Password"
                    className="input input-bordered w-full"
                    {...register("registerPassword", { required: true })}
                  />
                </div>

                <div onClick={()=>{setShowPassword(!showPassword)}} className="absolute ml-60 md:ml-60 mt-4">
                  {
                    show? <IoEye /> : <IoMdEyeOff />
                  }
                </div>
              </div>
              {errors.registerPassword && (
                <span className="text-red-500">*This field is required</span>
              )}
              {passErr && <span className="text-red-500">{passErr}</span>}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
              
            </div>

            <label className="label">
              <NavLink to={"/login"} className=" link link-hover">
                Already have account? Login
              </NavLink>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
