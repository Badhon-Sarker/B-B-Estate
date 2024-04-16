import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { GiBank } from "react-icons/gi";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="mt-10 flex flex-col md:flex-row items-center gap-3 justify-evenly p-2">

        <div className="card w-64 h-80 bg-base-100 shadow-xl">
          <div className=" mt-1 flex justify-center items-center">
            <p className="bg-red-200 flex text-8xl rounded-full p-5">
              <VscWorkspaceTrusted />
            </p>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Trusted By Thousands</h2>
            <p>Thousand of people have trusted on our service.</p>
          </div>
        </div>

        <div className="card w-64 h-80 bg-base-100 shadow-xl">
          <div className=" mt-1 flex justify-center items-center">
            <p className="bg-red-200 flex text-8xl rounded-full p-5">
            <MdOutlineAddHomeWork />
            </p>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Wide Renge Of Properties</h2>
            <p>We have a huge collection of awesome properties.</p>
          </div>
        </div>


        <div className="card w-64 h-80 bg-base-100 shadow-xl">
          <div className=" mt-1 flex justify-center items-center">
            <p className="bg-red-200 flex text-8xl rounded-full p-5">
            <GiBank />
            </p>
          </div>
          <div className="card-body text-center">
            <h2 className="card-title">Financing Made <br />Easy</h2>
            <p>We are providing the best financial support.</p>
          </div>
        </div>
        
       
      </div>
    </div>
  );
};

export default WhyChooseUs;
