import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
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
        <SwiperSlide className="">
          <div className=" bg-banner-1 bg-no-repeat bg-cover py-2 md:py-20 lg:py-32 rounded-md">
            <div
              className=" md:text-2xl font-semibold px-5 md:pl-12 md:pb-10 text-gray-800 md:text-slate-200"
              data-swiper-parallax="-300"
            >
              312, Jhonson Road, <br />
              California
            </div>

            <div
              className="px-5 md:pl-12 md:pb-10 text-xl md:text-4xl font-extrabold "
              data-swiper-parallax="-200"
            >
              <p className="text-white">Apex Housing</p>
            </div>

            <div
              className="px-5 md:pl-12 md:pb-10 text-sm md:text-md md:font-semibold text-gray-100 md:text-slate-100"
              data-swiper-parallax="-100"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at
              </p>
            </div>

            <div className="px-5 md:pl-12 pt-4 pb-3">
              <button className="bg-white w-42 py-2 px-3 border-2 border-green-400 text-xl font-semibold rounded-3xl">
                Sale: $120000
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className=" ">
          <div className=" bg-banner-2 bg-no-repeat bg-cover py-2 md:py-20 lg:py-32 rounded-md">
            <div
              className=" md:text-2xl font-semibold px-5 md:pl-12 md:pb-10 text-black"
              data-swiper-parallax="-300"
            >
              34/4 Manhatton <br />
              New York
            </div>

            <div
              className="px-5 md:pl-12 md:pb-10 text-xl md:text-4xl font-extrabold "
              data-swiper-parallax="-200"
            >
              <p className="text-black">Tommy Villa</p>
            </div>

            <div
              className="px-5 md:pl-12 md:pb-10 text-sm md:text-md md:font-semibold text-black md:text-white"
              data-swiper-parallax="-100"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at
              </p>
            </div>

            <div className="px-5 md:pl-12 pt-4 pb-3">
              <button className="bg-white w-42 py-2 px-3 border-2 border-green-400 text-xl font-semibold rounded-3xl">
                Rent: $2000
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className=" bg-banner-3 bg-no-repeat bg-cover py-2 md:py-20 lg:py-32 rounded-md">
            <div
              className=" md:text-2xl font-semibold px-5 md:pl-12 md:pb-10 text-gray-800"
              data-swiper-parallax="-300"
            >
              312, 67/6 VA, <br />
              West Verginia
            </div>

            <div
              className="px-5 md:pl-12 md:pb-10 text-xl md:text-4xl font-extrabold "
              data-swiper-parallax="-200"
            >
              <p className="text-gray-800">Royal Manshion</p>
            </div>

            <div
              className="px-5 md:pl-12 md:pb-10 text-sm md:text-md md:font-semibold text-gray-800 "
              data-swiper-parallax="-100"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at
              </p>
            </div>

            <div className="px-5 md:pl-12 pt-4 pb-3">
              <button className="bg-white w-42 py-2 px-3 border-2 border-green-400 text-xl font-semibold rounded-3xl">
                Sale: $820000
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./Banner.css";

// // import required modules
// import { Parallax, Pagination, Navigation } from "swiper/modules";

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./Banner.css";

// // import required modules
// import { Parallax, Pagination, Navigation } from "swiper/modules";

// <>
//   <Swiper
//     style={{
//       "--swiper-navigation-color": "#fff",
//       "--swiper-pagination-color": "#fff",
//     }}
//     speed={600}
//     parallax={true}
//     pagination={{
//       clickable: true,
//     }}
//     navigation={true}
//     modules={[Parallax, Pagination, Navigation]}
//     className="mySwiper"
//   >
//     <div
//       slot="container-start"
//       className="parallax-bg"
//       style={{
//         backgroundImage:
//           "url(https://i.ibb.co/qWrRqLN/istockphoto-1266156392-1024x1024.jpg)",
//       }}
//       data-swiper-parallax="-23%"
//     ></div>
//     <SwiperSlide className="">
//       <div className=" bg-banner-1 bg-no-repeat bg-cover py-2 md:py-20 lg:py-32 rounded-md">
//         <div
//           className=" md:text-2xl font-semibold px-5 md:pl-12 md:pb-10 text-gray-800 md:text-slate-200"
//           data-swiper-parallax="-300"
//         >
//           312, Jhonson Road, <br />
//           California
//         </div>

//         <div
//           className="px-5 md:pl-12 md:pb-10 text-xl md:text-4xl font-extrabold "
//           data-swiper-parallax="-200"
//         >
//           <p className="text-white">Apex Housing</p>
//         </div>

//         <div
//           className="px-5 md:pl-12 md:pb-10 text-sm md:text-md md:font-semibold text-gray-100 md:text-slate-100"
//           data-swiper-parallax="-100"
//         >
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
//             dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
//             laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
//             Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
//             Aliquam hendrerit lorem at
//           </p>
//         </div>

//         <div className="px-5 md:pl-12 pt-4 pb-3">
//           <button className="bg-white w-42 py-2 px-3 border-2 border-green-400 text-xl font-semibold rounded-3xl">
//             Sale: $120000
//           </button>
//         </div>
//       </div>
//     </SwiperSlide>

//     <SwiperSlide className=" ">
//       <div className=" bg-banner-2 bg-no-repeat bg-cover py-2 md:py-20 lg:py-32 rounded-md">
//         <div
//           className=" md:text-2xl font-semibold px-5 md:pl-12 md:pb-10 text-black"
//           data-swiper-parallax="-300"
//         >
//           34/4 Manhatton <br />
//           New York
//         </div>

//         <div
//           className="px-5 md:pl-12 md:pb-10 text-xl md:text-4xl font-extrabold "
//           data-swiper-parallax="-200"
//         >
//           <p className="text-black">Tommy Villa</p>
//         </div>

//         <div
//           className="px-5 md:pl-12 md:pb-10 text-sm md:text-md md:font-semibold text-black md:text-white"
//           data-swiper-parallax="-100"
//         >
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
//             dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
//             laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
//             Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
//             Aliquam hendrerit lorem at
//           </p>
//         </div>

//         <div className="px-5 md:pl-12 pt-4 pb-3">
//           <button className="bg-white w-42 py-2 px-3 border-2 border-green-400 text-xl font-semibold rounded-3xl">
//             Rent: $2000
//           </button>
//         </div>
//       </div>
//     </SwiperSlide>

//     <SwiperSlide className="">
//       <div className=" bg-banner-3 bg-no-repeat bg-cover py-2 md:py-20 lg:py-32 rounded-md">
//         <div
//           className=" md:text-2xl font-semibold px-5 md:pl-12 md:pb-10 text-gray-800"
//           data-swiper-parallax="-300"
//         >
//           312, 67/6 VA, <br />
//           West Verginia
//         </div>

//         <div
//           className="px-5 md:pl-12 md:pb-10 text-xl md:text-4xl font-extrabold "
//           data-swiper-parallax="-200"
//         >
//           <p className="text-gray-800">Royal Manshion</p>
//         </div>

//         <div
//           className="px-5 md:pl-12 md:pb-10 text-sm md:text-md md:font-semibold text-gray-800 "
//           data-swiper-parallax="-100"
//         >
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
//             dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
//             laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
//             Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
//             Aliquam hendrerit lorem at
//           </p>
//         </div>

//         <div className="px-5 md:pl-12 pt-4 pb-3">
//           <button className="bg-white w-42 py-2 px-3 border-2 border-green-400 text-xl font-semibold rounded-3xl">
//             Sale: $820000
//           </button>
//         </div>
//       </div>
//     </SwiperSlide>
//   </Swiper>
// </>;
