import { IMAGES } from "../../../Utils/images";

const DesgineSection = () => {
  return (
    <main className="text-white flex items-center justify-between md:flex-row flex-col md:gap-0 gap-6 w-full">
      {/* Text section */}
      <div className="md:w-[40%]">
        <h3 className="text2">Our UI/UX Design and Development Services</h3>
        <p className="text10 mt-2">
          Our UX/UI designers create compelling web designs that strengthen your
          brand identity while fostering meaningful user connections.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid sm:grid-cols-2 gap-4 md:w-auto w-full ">
        <div className="flex  items-center justify-center flex-col gap-4">
          {/* first Card */}
          <div className="bg-gradient-to-t bg-[#5454D4] from-[#42427c] md:p-8 p-4 rounded-2xl md:w-auto w-full ">
            <div className="flex items-center gap-4 py-4">
              <span>
                <img
                  className="md:w-10 sm:w-16 w-10 "
                  src={IMAGES.SERVICEICON1}
                  alt={IMAGES.SERVICEICON1}
                />
              </span>
              <span className="text4 font-semibold">50+</span>
            </div>
            <p className="text6">In-House Talent</p>
          </div>
          {/* Second Card */}
          <div className="bg-gradient-to-t bg-[#5454D4] from-[#42427c] md:p-8 p-4 rounded-2xl md:w-auto w-full ">
            <div className="flex items-center gap-4 py-4">
              <span>
                <img
                  className="md:w-10 sm:w-16 w-10 "
                  src={IMAGES.SERVICEICON2}
                  alt={IMAGES.SERVICEICON1}
                />
              </span>
              <span className="text4 font-semibold">50+</span>
            </div>
            <p className="text6">In-House Talent</p>
          </div>
        </div>
        {/* Crad 3 */}
        {/* <div className="bg-gradient-to-t bg-[#5454D4] from-[#42427c] flex flex-col items-center justify-center gap-4 rounded-2xl md:p-0 md:p-8 p-4 relative">
          <div className="flex items-center justify-center flex-col gap-2">
            <span>
              <img
                className="md:w-10 sm:w-16 w-10 "
                src={IMAGES.SERVICEICON3}
                alt={IMAGES.SERVICEICON3}
              />
            </span>
            <span className="text4 font-semibold">50+</span>
            <p className="text6">In-House Talent</p>
          </div>

          <div className="bg-red-600 w-[200px] h-56 absolute right-0 left-full bottom-full"></div>
        </div> */}

        <div className="bg-gradient-to-t bg-[#5454D4] from-[#42427c] flex flex-col items-center justify-center gap-4 rounded-2xl md:p-0 md:p-8 p-4 relative shadow-lg shadow-black/30">
          <div className="flex items-center justify-center flex-col gap-2">
            <span>
              <img
                className="md:w-10 sm:w-16 w-10"
                src={IMAGES.SERVICEICON3}
                alt={IMAGES.SERVICEICON3}
              />
            </span>
            <span className="text4 font-semibold">50+</span>
            <p className="text6">In-House Talent</p>
          </div>

          {/* Responsive Shadow Element */}
          <div className="bg-[#42427c] opacity-30 rounded-full absolute blur-2xl
                  w-[150px] h-[200px] bottom-[-30px] right-[-10px] top-4 
                  sm:w-[200px] sm:h-[250px] sm:bottom-[-40px] sm:right-[-18px] sm:top-6 
                  md:w-[300px] md:h-[300px] md:bottom-[-50px] xl:right-[-140px] md:right-[-60px] md:top-36"></div>
        </div>



        {/* shadow */}

      </div>
    </main>
  );
};

export default DesgineSection;
