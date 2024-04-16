import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";

const Estate = ({ estate }) => {
  const title = estate.estate_title;
  const status = estate.status;
  const image = estate.image;
  const location = estate.location;
  const price = estate.price;
  const area = estate.area;

  return (
    <div>
      <div className="card h-96 bg-base-100 shadow-xl p-2 font-poppins">
        <figure className=" md:h-44 xl:h-52">
          <img className="" src={image} alt="property image" />
        </figure>
        <div className=" flex-grow">
          <div>
            <div className="flex justify-center items-center font-bold text-xl">
              {title}
            </div>

            <p className="text-md font-medium flex gap-1 justify-center items-center px-2">
              <FaLocationDot /> {location}
            </p>

            <div className="flex justify-evenly font-semibold mt-3">
              <h1>Area: {area}</h1>
              <h1>Price: {price}</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-2 font-medium">
          <div className=" bg-yellow-200 px-2 rounded-md">
            <p>For {status}</p>
          </div>
        </div>

        <div className=" flex justify-center">
          <NavLink to={`/estates/${estate.id}`}>
            <button className="btn bg-emerald-300">Estate Details</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

Estate.propTypes = {
  estate: PropTypes.object,
};
export default Estate;

// <div className="card card-compact h-96 bg-base-100 shadow-xl">
// <div>
//   <figure className="lg:h-44 xl:h-52">
//     <img  src={image} alt="property image" />
//   </figure>

//   <div className="card-body flex-grow">
//     <div className="flex justify-center font-bold text-xl">{title}</div>
//   </div>
//   <p className="text-md font-medium flex gap-1 justify-center items-center px-2">
//     <FaLocationDot /> {location}
//   </p>
//   <div className="flex justify-evenly font-semibold px-2">
//     <h1>Area: {area}</h1>
//     <h1>Price: {price}</h1>
//   </div>
//   <div className="card-actions justify-center px-2">
//     <NavLink to={`/estates/${estate.id}`}>
//       <button className="btn btn-primary">Estate Details</button>
//     </NavLink>
//   </div>
// </div>
// </div>

{
  // className=" absolute mb-5 md:mt-5 ml-1 md:ml-5"
  /* <div className="card bg-base-100 shadow-xl max-h-96">
        
<figure className="px-10 pt-10 ">
  <img src={image} alt="property image" className="rounded-xl h-40" />
</figure>

<div className="card-body">
  
<h2 className="card-title">{title}</h2>

  <p>{location}</p>

  <div className=" card-actions">
  <NavLink to={`/estates/${estate.id}`}><button className="btn btn-primary">Estate Details</button></NavLink>
    
  </div>

  
  
 
</div> */
}
