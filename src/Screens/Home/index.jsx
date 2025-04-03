import Container from "../../Components/Container";
import CompaniesLogo from "./Components/CompaniesLogo";
import MeetClient from "./Components/MeetClient";
import OurProcess from "./Components/OurProcess";
import Portfolio from "./Components/Portfolio";
import TopSection from "./Components/TopSection";

const Home = () => {
  return (
    <>
      <Container>
        <TopSection />
        <CompaniesLogo />
        <OurProcess />
        <MeetClient />
        <Portfolio />
      </Container>
    </>
  );
};

export default Home;
