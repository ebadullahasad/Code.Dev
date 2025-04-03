import React from "react";
import { aboutUsData } from "../../../Utils/DummyData";
import { IMAGES } from "../../../Utils/images";
import AnimatedDiv from "../../../Components/Animation";
const GetToKnow = () => {
  return (
    <div className=" text-white">
      {aboutUsData &&
        aboutUsData.map((item, ind) => (
          <div className="text-center" key={ind}>
            {ind === 0 ? (
              <AnimatedDiv animationType="fadeIn" delay={0.3}>
                <div className="md:w-[55%] w-full mx-auto">
                  <p className="lg:text2 md:text3 text5 font-Barlow font-bold">
                    {item.heading}
                  </p>
                  <p className="lg:text10 md:text11 text8  mt-2 font-NunitoSans font-normal">
                    {item.para}
                  </p>
                </div>
              </AnimatedDiv>
            ) : (
              <div>
                <AnimatedDiv
                  animationType="fadeIn"
                  delay={0.4}
                  triggerOnce={true}
                >
                  <img
                    className="mt-10 mb-5"
                    src={IMAGES.ABOUT_US}
                    alt={IMAGES.ABOUT_US}
                  />
                </AnimatedDiv>

                <div className="md:w-[70%] w-full mx-auto">
                  <AnimatedDiv
                    animationType="fadeIn"
                    delay={0.5}
                    triggerOnce={true}
                  >
                    <p className="lg:text3 md:text4 text6 font-Barlow font-bold">
                      {item.heading}
                    </p>
                    <p className="lg:text10 md:text11 text8 mt-2 font-NunitoSans font-normal">
                      {item.para}
                    </p>
                  </AnimatedDiv>
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default GetToKnow;
