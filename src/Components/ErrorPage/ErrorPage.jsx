import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="mt-28 md:mt-48 lg:mt-52 text-gray-600">
      <Helmet><title>Error</title></Helmet>
        <h1 className="text-9xl font-extrabold text-center">404</h1>
        <h2 className="text-5xl font-bold text-center">Page Not Found</h2>
      </div>
      <div className="flex justify-center mt-4"><button  className="btn bg-blue-500"><NavLink to={'/'}>Home</NavLink></button></div>
    </div>
  );
};

export default ErrorPage;
