import CeoSection from "./Component/CeoSection";
import MemberCard from "./Component/MembersCard";
import GetToKnow from "./Component/GetToKnow";
import AboutCard from "./Component/AboutCard";
import Container from "../../Components/Container";
const AboutUs = () => {
  return (
    <Container>
      <GetToKnow />
      <AboutCard />
      <CeoSection />
      <MemberCard />
    </Container>
  );
};

export default AboutUs;
