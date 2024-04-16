
import { FaArrowAltCircleRight } from "react-icons/fa";

const Facilities = ({item}) => {
    return (
        <div data-aos="fade-right" data-aos-duration="1000" className="flex text-center gap-2 text-gray-600 items-center font-poppins">
            <p><FaArrowAltCircleRight /></p>
            <p>{item}</p>
        </div>
    );
};

export default Facilities;