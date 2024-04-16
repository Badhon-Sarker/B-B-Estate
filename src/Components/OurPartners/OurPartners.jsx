

const OurPartners = () => {
    return (
        <div>
            
            <div data-aos="fade-up" data-aos-duration="1000" >
            <hr />
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-4">Our Partners</h1>
            </div>
            <div data-aos="fade-down" data-aos-duration="1000">
                <p className=" font-semibold text-gray-600 text-center mt-2 mb-5">
                We only work with the best companies around the globe
                </p>
            </div>
            <hr />

            <div className="flex flex-col md:flex-row items-center gap-10 justify-evenly my-10">
                <div data-aos="fade-up" data-aos-duration="1000"><img className="border-2 w-48 rounded-full shadow-xl border-gray-400 p-5 bg-red-200" src="https://i.ibb.co/p3ZrQwQ/1600w-r-RP1n1l-Ppek.webp" alt="" /></div>

                <div data-aos="fade-up" data-aos-duration="1000"><img className="border-2 w-48 rounded-full p-5 bg-red-200 shadow-xl border-gray-400" src="https://i.ibb.co/qWqp7s3/images.jpg" alt="" /></div>

                <div data-aos="fade-up" data-aos-duration="1000"><img className="border-2 w-48 rounded-full p-5 shadow-xl border-gray-400 bg-red-200" src="https://i.ibb.co/NK9wjBS/images-1.png" alt="" /></div>

                <div data-aos="fade-up" data-aos-duration="1000"><img className="border-2 w-48 rounded-full shadow-xl border-gray-400 p-5 bg-red-200" src="https://i.ibb.co/NZbvdJW/images.png" alt="" /></div>
                
            </div>
            
        </div>
    );
};

export default OurPartners;