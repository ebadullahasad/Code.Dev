import Container from "../../Components/Container";
import ServiceBanner from "./Components/ServiceBanner";
import DesgineSection from "./Components/DesgineSection";
import Stepper from "./Components/Stepper";
import ContactInformation from "./Components/ContactInformation";

const ServicesDetail = () => {
  return (
    <Container>
      <div>
        <ServiceBanner />
        <DesgineSection />
        <Stepper />
        <ContactInformation />
      </div>
    </Container>
  );
};

export default ServicesDetail;
