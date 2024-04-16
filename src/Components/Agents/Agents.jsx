import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Agents = () => {
  return (
    <div className="font-poppins">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://i.ibb.co/Vj9nGKF/imagereader.webp"
                className="md:max-w-sm rounded-lg shadow-2xl"
              />
              <div className="flex flex-col justify-center lg:">
                <h1 className="md:text-5xl text-2xl font-bold text-center lg:text-left">
                  THOMAS AABO
                </h1>
                <p className="py-3 text-center lg:text-left">
                  Email: thomas.aabo@elliman.com
                </p>

                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <div className="text-xl font-bold">Ratings:</div>

                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>

                <div className="text-center lg:text-left mt-5 font-semibold">
                  <p>
                    Address: 2488 Main St <br />
                    Bridgehampton, 11932
                  </p>
                  <div className="w-full gap-2 my-2 space-y-2">
                    <div>
                      <button className="btn w-40 bg-green-100">Call us</button>
                    </div>
                    <div>
                      <button className="btn w-40 bg-red-100">Email us</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://i.ibb.co/XLWMTBK/imagereader-1.webp"
                className="md:max-w-sm rounded-lg shadow-2xl"
              />
              <div className="flex flex-col justify-center lg:">
                <h1 className="md:text-5xl text-2xl font-bold text-center lg:text-left">
                  JENNIFER (KAUFMAN) STILLMAN
                </h1>
                <p className="py-3 text-center lg:text-left">
                  jennifer.stillman@elliman.com
                </p>

                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <div className="text-xl font-bold">Ratings:</div>

                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                     
                    />

                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                  </div>
                </div>

                <div className="text-center lg:text-left mt-5 font-semibold">
                  <p>
                    575 Madison Ave, <br /> New York, 10022
                  </p>
                  <div className="w-full gap-2 my-2 space-y-2">
                    <div>
                      <button className="btn w-40 bg-green-100">Call us</button>
                    </div>
                    <div>
                      <button className="btn w-40 bg-red-100">Email us</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://i.ibb.co/KbmmWkW/imagereader-2.webp"
                className="md:max-w-sm rounded-lg shadow-2xl"
              />
              <div className="flex flex-col justify-center lg:">
                <h1 className="md:text-5xl text-2xl font-bold text-center lg:text-left">
                  PHILLIP ACHA
                </h1>
                <p className="py-3 text-center lg:text-left">
                  phillip.acha@elliman.com
                </p>

                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <div className="text-xl font-bold">Ratings:</div>

                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />

                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>

                <div className="text-center lg:text-left mt-5 font-semibold">
                  <p>
                    140 Franklin St <br />
                    New York, 10013
                  </p>
                  <div className="w-full gap-2 my-2 space-y-2">
                    <div>
                      <button className="btn w-40 bg-green-100">Call us</button>
                    </div>
                    <div>
                      <button className="btn w-40 bg-red-100">Email us</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://i.ibb.co/89Ng19N/imagereader-3.webp"
                className="md:max-w-sm rounded-lg shadow-2xl"
              />
              <div className="flex flex-col justify-center lg:">
                <h1 className="md:text-5xl text-2xl font-bold text-center lg:text-left">
                  NATALIE ABRAHAM
                </h1>
                <p className="py-3 text-center lg:text-left">
                  natalie.abraham@elliman.com
                </p>

                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <div className="text-xl font-bold">Ratings:</div>

                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />

                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                  </div>
                </div>

                <div className="text-center lg:text-left mt-5 font-semibold">
                  <p>
                    1995 Broadway <br />
                    New York, 10023
                  </p>
                  <div className="w-full gap-2 my-2 space-y-2">
                    <div>
                      <button className="btn w-40 bg-green-100">Call us</button>
                    </div>
                    <div>
                      <button className="btn w-40 bg-red-100">Email us</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://i.ibb.co/dGpLDZv/imagereader-4.webp"
                className="md:max-w-sm rounded-lg shadow-2xl"
              />
              <div className="flex flex-col justify-center lg:">
                <h1 className="md:text-5xl text-2xl font-bold text-center lg:text-left">
                  BRIAN ADAMS
                </h1>
                <p className="py-3 text-center lg:text-left">
                  badams@elliman.com
                </p>

                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <div className="text-xl font-bold">Ratings:</div>

                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />

                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                  </div>
                </div>

                <div className="text-center lg:text-left mt-5 font-semibold">
                  <p>
                    140 Franklin St <br />
                    New York, 10013
                  </p>
                  <div className="w-full gap-2 my-2 space-y-2">
                    <div>
                      <button className="btn w-40 bg-green-100">Call us</button>
                    </div>
                    <div>
                      <button className="btn w-40 bg-red-100">Email us</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Agents;
