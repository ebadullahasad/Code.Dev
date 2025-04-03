import AnimatedDiv from "../../../Components/Animation";
import { IMAGES } from "../../../Utils/images";
import ReviewCarousel from "./ReviewCarousel";

const MeetClient = () => {
  return (
    <div
      className="flex md:flex-row flex-col items-center 
    justify-between lg:gap-8 gap-4 md:py-16 py-10"
    >
      <div className="md:w-[40%] w-[100%]">
        <AnimatedDiv animationType="slideInLeft" delay={0.4} triggerOnce={true}>
          <img
            className="lg:w-[600px] xxl:w-[500px] xxl2:w-[800px] md:w-[450px] 
      w-full h-[300px] md:h-auto object-cover rounded-xl"
            src={IMAGES.MEETCLIENT}
            alt={IMAGES.MEETCLIENT}
            draggable={false}
          />
        </AnimatedDiv>
      </div>
      {/* content section  */}
      <ReviewCarousel />
      {/* content section  */}
    </div>
  );
};

export default MeetClient;
