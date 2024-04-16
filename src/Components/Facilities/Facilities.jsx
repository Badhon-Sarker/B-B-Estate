
import { FaArrowAltCircleRight } from "react-icons/fa";

const Facilities = ({item}) => {
    return (
        <div className="flex text-center gap-2 text-gray-600 items-center">
            <p><FaArrowAltCircleRight /></p>
            <p>{item}</p>
        </div>
    );
};

export default Facilities;