import { IMAGES } from "../../../Utils/images";
import React, { useState } from "react";
import Form from "./Form";
import { wehadlove, para1, buttondata } from "../../../Utils/DummyData";
import Button from "../../../Components/Button";
import InfoForm from "./InfoForm";
import AnimatedDiv from "../../../Components/Animation";

const WeHadLove = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="bg-primaryColor">
      {/* Section:01 */}
      <div className="lg:w-[100%] md:w-[90%] w-full py-10 mx-auto bg-secondaryColor">
        {/* TextWork */}
        <AnimatedDiv animationType="fadeIn" delay={0.3}>
          <div className="md:w-[80%] mx-auto text-center">
            <div className="flex flex-row justify-center mb-2 items-center">
              <img
                className="md:w-[50px] md:h-[50px] w-[40px] h-[40px] bg-lightblue p-2 rounded-lg"
                src={IMAGES.MESSAGE_ICON}
                alt=""
              />
            </div>

            <p className="text-white font-bold md:text4 text4">{wehadlove}</p>
            <p className="text-white font-normal md:text11 md:px-2 px-4 text8 py-3">
              {para1}
            </p>
          </div>
        </AnimatedDiv>

        {/* ButtonWork */}
        <AnimatedDiv animationType="fadeIn" delay={0.35}>
          <div className="flex sm:flex-row flex-col items-center justify-center gap-4 mt-5">
            {buttondata &&
              buttondata.map((data, ind) => (
                <div key={ind}>
                  <Button
                    divstyle="p-3 border-solid border-2 rounded-lg w-full animate-bounce"
                    imagediv="flex md:flex-row justify-between gap-2 text-white"
                    imageStyle="lg:w-[17px] lg:h-[17px] sm:w-[16px] sm:h-[16px] w-[15px] h-[15px]"
                    btnStyle="lg:text11 md:text12 text11"
                    image={data.img}
                    btnname={data.para}
                  />
                </div>
              ))}
          </div>
        </AnimatedDiv>
      </div>
      {/* Section:02 */}
      <div className="w-[80%] mx-auto py-10">
        <img src={IMAGES.MAP} alt="" />
      </div>
      {/* Section:03 */}
      <AnimatedDiv animationType="fadeIn" delay={0.4} triggerOnce={true}>
        <div className="flex md:flex-row flex-col w-full gap-5">
          {/* LeftSection */}
          <InfoForm />
          {/* RightSection */}
          <Form />
        </div>
      </AnimatedDiv>
    </div>
  );
};

export default WeHadLove;
