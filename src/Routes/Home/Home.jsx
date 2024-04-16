import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import Estates from "../../Components/Estates/Estates";
import OurPartners from "../../Components/OurPartners/OurPartners";

const Home = () => {
  

  return (
    <div className="mb-10 font-poppins">
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Banner></Banner>

      <Estates></Estates>

      <div data-aos="fade-up" data-aos-duration="1000" className="mt-10">
        <hr />
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-2">
          Why Choose Us
        </h1>
        <WhyChooseUs></WhyChooseUs>
      </div>

      <div className="my-10 px-5">
        <OurPartners></OurPartners>
      </div>
    </div>
  );
};

export default Home;
