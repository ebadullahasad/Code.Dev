import React from "react";
import { IMAGES } from "../../../Utils/images";
import AnimatedDiv from "../../../Components/Animation";

const BannerSection = () => {
  return (
    <div>
      <div
        className="w-full lg:h-[400px] md:h-[360px] sm:h-[320px] h-[200px] 
        flex items-center justify-center"
        style={{
          backgroundImage: `url(${IMAGES.BLOGIMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div
          className="lg:w-[50%] md:w-[60%] w-[80%] flex flex-col items-center 
        justify-center md:py-8 py-4 md:gap-4 gap-1 bg-primaryColor/60 rounded-md px-4"
        >
          <AnimatedDiv animationType="fadeIn" delay={0.3}>
            <h1 className="text-whiteColor font-bold text5 text-center">
              Welcome to Our Blogs
            </h1>
            <span className="text-whiteColor text-center lg:w-[80%] w-[100%] text11">
              Discover the power of unity with LinkedUnion, where insights and
              stories unite us, driving change and inspiring progress.
            </span>
          </AnimatedDiv>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
