import Button from "../../../Components/Button";
import { IMAGES } from "../../../Utils/images";
import { ceoData } from "../../../Utils/DummyData";
import Divider from "../../../Components/Divider";
import AnimatedDiv from "../../../Components/Animation";

const CeoSection = () => {
  return (
    <div className="md:flex-row flex flex-col gap-5 mx-auto md:my-12 my-10">
      {/* leftSection */}
      <div className="lg:w-[40%] md:w-[45%]">
        {/* CEOImg */}
        <AnimatedDiv animationType="slideInLeft" delay={0.4} triggerOnce={true}>
          <img
            className="lg:w-[400px] lg:h-[440px] md:h-[385px] h-[330px] w-full"
            src={IMAGES.CEO}
            alt=""
          />
        </AnimatedDiv>
        {/* <Button /> */}
      </div>

      {/* Right Section */}
      <div className="lg:w-[60%]  md:w-[55%]">
        {/* CEOInfo */}
        <AnimatedDiv
          animationType="slideInRight"
          delay={0.4}
          triggerOnce={true}
        >
          {ceoData.ceoInfo && (
            <div>
              <h1 className="lg:text3 md:text4 text3 font-Barlow text-white font-bold">
                {ceoData.ceoInfo.name}
              </h1>
              <p className="lg:text10 lg:mt-2 md:text9 md:mt-3 mt-2 text7 font-Barlow text-white font-semibold">
                {ceoData.ceoInfo.title}
              </p>
              <p className=" lg:w-[100%] lg:my-4 md:w-[90%] md:text12 my-3 text8 font-NunitoSans text-lightgray3">
                {ceoData.ceoInfo.description}
              </p>
              {/* SocialMediaIcons */}
              <div className="flex space-x-4 ">
                {ceoData.ceoInfo.socialIcons.map((icon, ind) => (
                  <img
                    key={ind}
                    src={icon.img}
                    alt={`social-icon-${ind}`}
                    className="w-6 h-6"
                  />
                ))}
              </div>
              <Divider borderStyle="lg:mt-8 md:mt-5  mt-7 text-red-400" />
            </div>
          )}

          {/* CompanyExperience */}
          {ceoData.companyExperience && (
            <div className="mt-5">
              <h2 className="lg:text7 font-Barlow text-white font-semibold">
                {ceoData.companyExperience.title}
              </h2>
              <p className="lg:w-[100%] md:w-[90%] md:text12 text8 font-NunitoSans text-lightgray3 my-2 ">
                {ceoData.companyExperience.description}
              </p>
              <div className="mt-4">
                {ceoData.companyExperience.highlights.map((highlight, ind) => (
                  <div key={ind} className="flex items-center space-x-2 mt-2">
                    <div className="lg:w-[15px] lg:h-[15px] md:w-[17px] md:h-[17px] w-[13px] h-[13px] rounded-full bg-green-700 flex items-center justify-center">
                      <img
                        src={highlight.icon}
                        alt={`highlight-icon-${ind}`}
                        className="lg:w-[10px] lg:h-[10x] md:w-[8px] md:h-[8px] w-[6px] h-[6px]"
                      />
                    </div>
                    <p className="text11 font-NunitoSans text-white">
                      {highlight.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </AnimatedDiv>
      </div>
    </div>
  );
};

export default CeoSection;
