import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import Facilities from "../../Components/Facilities/Facilities";

const EstateDetails = () => {
  const estates = useLoaderData();

  const { id } = useParams();

  const estate = estates?.find((estate) => estate.id == id);

  const title = estate.estate_title;
  const status = estate.status;
  const image = estate.image;
  const location = estate.location;
  const description = estate.description;
  const price = estate.price;
  const area = estate.area;
  const facilities = estate.facilities;

  return (
    <div className="font-poppins">
      <Helmet>
        <title>Estate | {title}</title>
      </Helmet>
      <div className="p-2">
        <div data-aos="fade-down" data-aos-duration="1000">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold  text-center mt-4 mb-5 font-poppins">
            {title}
          </h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className=" my-3">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold flex items-center justify-center gap-2">
            <FaLocationDot /> {location}
          </h1>
        </div>

        <div data-aos="zoom-in" data-aos-duration="1000" className="relative">
          <div className=" absolute mt-2 md:mt-5 ml-2 md:ml-5 xl:ml-48">
            <div className="skeleton rounded-full w-10 h-10 text-xl font-semibold md:w-20 md:h-20 flex justify-center items-center md:text-3xl md:font-extrabold bg-yellow-300">
              {status}
            </div>
          </div>

          <div className="flex justify-center ">
            <img src={image} alt="Estate Image h-4/5" />
          </div>
        </div>

         <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col justify-center text-center  items-center gap-2 my-10">
            <div className="text-3xl font-bold">Facillities:</div> 
            {facilities.map((item, idx) => <Facilities key={idx} item={item}></Facilities>)}
         </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <h1 className="md:text-2xl lg:text-3xl font-semibold  text-center my-3">
            Description:{" "}
          </h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <p>{description}</p>
        </div>

        <div data-aos="zoom-in" data-aos-duration="1000" className="md:flex md:justify-evenly text-2xl font-extrabold my-10">
          <div className="bg-green-400 p-2 rounded-md mb-3">
            <h1>Price: {price}</h1>
          </div>
          <div className="bg-red-400 p-2 rounded-md">
            <h1>Area: {area}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;

{
  /* <div className="skeleton rounded-full w-10 h-10 text-xl font-semibold md:w-20 md:h-20 flex justify-center items-center md:text-3xl md:font-extrabold bg-yellow-300">
                {status}
              </div> */
}
