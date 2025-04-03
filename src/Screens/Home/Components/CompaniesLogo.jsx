import { useEffect, useRef } from "react";
import Button from "../../../Components/Button";
import { IMAGES } from "../../../Utils/images";
import AnimatedDiv from "../../../Components/Animation";

const CompaniesLogo = () => {
  const carouselContainerRef = useRef(null);

  useEffect(() => {
    const scrollerContent = Array.from(carouselContainerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      carouselContainerRef.current.appendChild(duplicatedItem);
    });
  }, []);

  const logoImages = [
    { img: IMAGES.ZAPIER },
    { img: IMAGES.SPOTIFY },
    { img: IMAGES.ZOOM },
    { img: IMAGES.SLACK },
    { img: IMAGES.AMAZON },
    { img: IMAGES.ADOBE },
  ];

  return (
    <AnimatedDiv animationType="fadeIn" delay={0.3} triggerOnce={true}>
      <div className="w-full lg:pt-[140px] md:pt-[100px] pt-[80px] pb-8">
        <div className="text-center flex flex-col items-center justify-between">
          <Button
            btnname="Trusted By 250+ Companies"
            btnStyle="bg-blackColor text-whiteColor text11 md:px-6 px-4 md:py-3 py-2 rounded-full font-medium"
          />
          <div className="w-full flex items-center whitespace-nowrap overflow-hidden gap-24">
            <div className="bg-secondary1 rounded-md overflow-hidden">
              <div className="[mask:linear-gradient(to_right,transparent,white_25%,white_75%,transparent)]">
                <div
                  ref={carouselContainerRef}
                  className="flex justify-center md:gap-20 gap-10 animate-carousel w-max"
                >
                  {logoImages.map((img, index) => (
                    <div key={index} className="-rotate-45 flex flex-col gap-5">
                      <div className="">
                        <img
                          src={img.img}
                          className="lg:w-[120px] md:w-[100px] sm:w-[80px] w-[60px] 
                        lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] object-contain rotate-45 text-white"
                          alt={img.img}
                          draggable={false}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default CompaniesLogo;
