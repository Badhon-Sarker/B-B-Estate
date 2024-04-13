import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <Helmet><title>Home</title></Helmet>
            <h1>This is home</h1>
          <NavLink to={'/aboutus'}><button type="button">conta</button></NavLink>
            
        </div>
    );
};

export default Home;