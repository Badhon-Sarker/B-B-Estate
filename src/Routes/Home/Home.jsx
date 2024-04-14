import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";


const Home = () => {
    return (
        <div>

            <Helmet><title>Home</title></Helmet>
            
             <Banner></Banner>
             
            
        </div>
    );
};

export default Home;