import AnimatedDiv from "../../../Components/Animation";
import { serviceText } from "../../../Utils/DummyData";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div>
      {/* Heading */}
      <div>
        <AnimatedDiv animationType="fadeIn" delay={0.3}>
          <p className="font-Barlow sm:py-2 text-white text-center font-bold sm:text2 text4">
            {serviceText}
          </p>
        </AnimatedDiv>
      </div>

      {/* ServiceCards */}
      <ServiceCard />
      {/* ServiceCards */}
    </div>
  );
};
export default Services;
