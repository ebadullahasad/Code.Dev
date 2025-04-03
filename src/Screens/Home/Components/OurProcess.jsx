import { IMAGES } from "../../../Utils/images";
import { OurProcessData, MyLottieAnimation } from "../../../Utils/DummyData";
import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AnimatedDiv from "../../../Components/Animation";

const OurProcess = () => {
  const [active, setActive] = useState(0);
  const [getIndex, setIndex] = useState(0);

  const handleOpen = (i) => {
    setActive(active === i ? null : i);
    setIndex(getIndex === i ? null : i);
  };
  return (
    // <AnimatedDiv animationType="fadeIn" delay={0.3} triggerOnce={true}>
    <div className=" ">
      <div className="w-full flex md:flex-row flex-col items-center lg:gap-8 gap-4 ">
        <div className="md:w-[40%]">
          <AnimatedDiv
            animationType="slideInLeft"
            delay={0.4}
            triggerOnce={true}
          >
            {MyLottieAnimation.map((item) =>
              getIndex === item.id ? (
                <div key={item.id}>
                  <DotLottieReact src={item.lottieUrl} loop autoplay />
                </div>
              ) : null
            )}
          </AnimatedDiv>
        </div>

        {/* Process List */}
        <div className="md:w-[60%]  ">
          <AnimatedDiv
            animationType="slideInRight"
            delay={0.4}
            triggerOnce={true}
          >
            {OurProcessData.map((items, ind) => (
              <div key={ind} className="pb-4 flex flex-col lg:gap-4 gap-1 ">
                <h1 className="text2 text-whiteColor font-semibold lg:text-left">
                  {items.heading}
                </h1>
                <p className="text12 text-lightgray5 lg:text-left">
                  {items.para}
                </p>

                {items.details.map((item, i) => (
                  <div
                    onClick={() => handleOpen(i)}
                    className="flex cursor-pointer items-start justify-start md:gap-4 gap-2 md:pt-3 pt-1 "
                    key={i}
                  >
                    {/* Icon */}
                    <img
                      className="lg:w-[45px] md:w-[33px] w-[28px] lg:h-[45px] md:h-[33px] h-[28px]
                      object-contain lg:p-3 md:p-2 p-1 md:rounded-xl rounded-md"
                      src={item.img}
                      alt={item.title}
                      draggable={false}
                      style={{ backgroundColor: item.color }}
                    />

                    {/* Expandable Content */}
                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        active === i
                          ? "overflow-scroll xl:overflow-hidden"
                          : "h-[34px] overflow-hidden"
                      }`}
                    >
                      <div className="flex items-center justify-between md:mt-[11px] mt-[5px] ">
                        <h1 className="text11   text-whiteColor font-medium">
                          {item.title}
                        </h1>
                        {/* Toggle Icons */}
                        {active === i ? (
                          <img
                            className="md:w-4.5 w-3 object-contain cursor-pointer"
                            src={IMAGES.MINUS}
                            alt="Collapse"
                          />
                        ) : (
                          <img
                            className="md:w-4.5 w-3 object-contain cursor-pointer"
                            src={IMAGES.PLUS}
                            alt="Expand"
                          />
                        )}
                      </div>
                      <p className="lg:text11 text12 mt-5 w-full text-lightgray5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </AnimatedDiv>
        </div>
      </div>
    </div>
    // </AnimatedDiv>
  );
};

export default OurProcess;
