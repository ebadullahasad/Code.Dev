import Rating from "../../../Components/Rating";
import { IMAGES } from "../../../Utils/images";
import { SLIDES } from "../../../Utils/DummyData";
import { useRef } from "react";
import AnimatedDiv from "../../../Components/Animation";

const ReviewCarousel = () => {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth;
      if (direction === "left") {
        sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else if (direction === "right") {
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <div className="relative md:w-[60%] overflow-hidden w-full">
        <AnimatedDiv
          animationType="slideInRight"
          delay={0.4}
          triggerOnce={true}
        >
          <div
            ref={sliderRef}
            className="flex gap-6 w-full overflow-x-auto scroll-smooth scrollbar-hide"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {SLIDES.map((item, ind) => (
              <div
                key={ind}
                className="w-full
               flex-shrink-0 "
                style={{ scrollSnapAlign: "start" }}
              >
                <h1 className="text-whiteColor font-semibold text2 md:pb-6 pb-4">
                  {item.heading}
                </h1>
                <div className="flex flex-col gap-2">
                  <p className="text-whiteColor text10">{item.subHead}</p>
                  <Rating />
                  <p className="text-whiteColor text11 md:line-clamp-4">
                    {item.desc}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-4">
                    <img
                      className="lg:w-[50px] md:w-[40px] w-[30px] object-contain"
                      src={item.img}
                      alt={item.img}
                      draggable={false}
                    />
                    <div className="text-whiteColor">
                      <h1 className="text10 font-semibold">
                        {item.clientName}
                      </h1>
                      <p className="text12 text-lightgray2">{item.country}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      className="md:w-[30px] w-[24px] cursor-pointer object-contain 
                bg-mutedgray rounded-full md:p-2.5 p-2"
                      src={IMAGES.LEFTARROW}
                      alt={IMAGES.LEFTARROW}
                      onClick={() => handleScroll("left")}
                    />
                    <img
                      className="md:w-[30px] w-[24px] cursor-pointer object-contain 
                bg-mutedgray rounded-full md:p-2.5 p-2"
                      src={IMAGES.RIGHTARROW}
                      alt={IMAGES.RIGHTARROW}
                      onClick={() => handleScroll("right")}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedDiv>
      </div>
    </>
  );
};

export default ReviewCarousel;
