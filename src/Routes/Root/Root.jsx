import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Root = () => {
    const navigation = useNavigation()
    return (
        <div className="px-1 md:px-2 lg:px-4 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>

            {/* {
                navigation.state === 'loading' ? <div className="flex justify-center text-center"><span className="loading loading-spinner loading-lg"></span></div> : 
            } */}
            
            <Footer></Footer>
            
        </div>
    );
};

export default Root;