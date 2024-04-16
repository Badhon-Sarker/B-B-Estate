import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);
  const [loginErr, setLoginErr] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        toast.success("Successfully login");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        toast.success("Successfully login");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const onSubmit = (data) => {
    const email = data.loginEmail;
    const password = data.loginPassword;

    loginUser(email, password)
      .then((result) => {
        toast.success("Successfully login");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("Invalid credential");
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200 font-poppins">
      <Helmet>
        <title>Login</title>
      </Helmet>
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
              {errors.loginEmail && (
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
                {...register("loginPassword", { required: true })}
              />
              {errors.loginPassword && (
                <span className="text-red-500">*This field is required</span>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              {loginErr && <span className="text-red-500">{loginErr}</span>}

              <div className="form-control">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="text-sm mt-2">
                New here? <NavLink to={"/register"}>Create account</NavLink>
              </div>
            </div>

            <div className=" space-y-2">
              <div className="">
                <button
                  onClick={() => {
                    handleGoogleLogin();
                  }}
                  className="border-2 h-8 w-full flex justify-center items-center font-semibold gap-1 rounded-lg"
                >
                  <FcGoogle /> Sign in with Google
                </button>
              </div>

              <div className="">
                <button
                  onClick={() => {
                    handleGithubLogin();
                  }}
                  className="border-2 h-8 w-full flex justify-center items-center font-semibold gap-1 rounded-lg"
                >
                  <BsGithub /> Sign in with Github
                </button>
              </div>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
