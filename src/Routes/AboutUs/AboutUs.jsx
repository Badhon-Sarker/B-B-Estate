import Agents from "../../Components/Agents/Agents";
import Leaflet from "../../Components/Leaflet/Leaflet";

const AboutUs = () => {
  return (
    <div className="font-poppins">
      <div className="my-3">
        <div data-aos="fade-down" data-aos-duration="1000" className="text-xl font font-semibold md:text-2xl lg:text-4xl md:font-bold text-center mb-5">
          Our Agents
        </div>

        <Agents></Agents>
      </div>

      <div className="my-10">
        <div>
          <div data-aos="fade-up" data-aos-duration="1000" className="text-2xl font font-bold md:text-3xl lg:text-4xl md:font-bold text-center mb-5">
            About us
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="md:px-20 px-2 text-gray-600">
            Welcome to B&B Estate, where dreams find their perfect address in
            the heart of New York City. Our passion for real estate excellence
            drives us to curate spaces that transcend mere living, crafting
            homes that resonate with your aspirations. At B&B Estate, we blend
            expertise with innovation, offering bespoke solutions tailored to
            your unique needs. With a portfolio ranging from luxurious
            penthouses to cozy apartments, we cater to every lifestyle. Our
            commitment to impeccable service ensures a seamless experience from
            consultation to closing. Nestled in the vibrant pulse of NYC, our
            office sits at 123 Broadway, New York, NY, a bustling hub where
            ideas converge and dreams take flight. Come, join us on this
            journey, as we redefine the essence of home, one remarkable property
            at a time. Welcome to B&B Estate, where every space tells a story,
            and every address is a destination.
          </div>
        </div>

        <div className="my-10">
          <div data-aos="fade-right" data-aos-duration="1000" className="flex justify-center items-center gap-2">
            <h1 className="font-bold md:text-xl ">Adress:</h1>{" "}
            <p className="font-semibold ">123 Broadway, New York, NY</p>
          </div>

          <div data-aos="fade-right" data-aos-duration="1200" className="flex justify-center items-center gap-2">
            <h1 className="font-bold md:text-xl ">Email:</h1>{" "}
            <p className="font-semibold ">estatebandb@gmail.com</p>
          </div>


          <div data-aos="fade-right" data-aos-duration="1400" className="flex justify-center items-center gap-2">
            <h1 className="font-bold md:text-xl ">Phone:</h1>{" "}
            <p className="font-semibold ">96959872086</p>
          </div>

        </div>
        <Leaflet></Leaflet>
      </div>
    </div>
  );
};

export default AboutUs;
