import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
  const { registerUser} = useContext(AuthContext);

  const [passErr , setPassErr] = useState(null)

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

  const onSubmit = (data) => {
    const name = data.registerName;
    const image = data.registerPhotoURL;
    const email = data.registerEmail;
    const password = data.registerPassword;

    if (password.length < 6) {
      setPassErr("");
      return setPassErr("Password should have 6 characters");
    }

    if (!isUpperCaseIncluded(password)) {
      setPassErr("");
      return setPassErr("Password need to have Uppercase");
    }

    if (!isLowerCaseIncluded(password)) {
      setPassErr("");
      return setPassErr("Password need to have Lowercase");
    }

    registerUser(email, password)
    .then(reult =>{

      toast.success('Account has been created!')
    })
    .catch(error =>{
      console.error(error)
    })
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                {...register("registerPassword", { required: true })}
              />
              {errors.registerPassword && (
                <span className="text-red-500">*This field is required</span>
              )}
              {passErr && <span className="text-red-500">{passErr}</span>}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
              <ToastContainer />
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
