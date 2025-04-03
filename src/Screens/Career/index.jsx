import PortfolioButton from "../../Components/PortfolioButton";
import { Arr2, JobCardData } from "../../Utils/DummyData";
import Container from "../../Components/Container";
import JobCard from "./Components/JobCard";
import { useState } from "react";
import AnimatedDiv from "../../Components/Animation";

const Career = () => {
  const [filteredCategory, setFilteredCategory] = useState("Design");

  // Handle the category filter change
  const handleFilterChange = (category) => {
    setFilteredCategory(category);
  };

  // Filter jobs based on the selected category
  const filteredJobs = JobCardData.filter((item) =>
    filteredCategory === "Design"
      ? item.category === "Design"
      : item.category === filteredCategory
  );

  return (
    <Container>
      <div className="flex flex-col gap-3 border-b-2 border-secondaryColor">
        <AnimatedDiv animationType="fadeIn" delay={0.3}>
          <div className="flex flex-col gap-4">
            <h1 className="text-whiteColor font-bold text2">
              Be a part of our mission
            </h1>
            <p className="text-lightgray6 text10 md:w-[40%] w-[100%]">
              We’re looking for passionate people to join us on our mission. We
              value flat hierarchies, clear communication, full ownership, and
              responsibility.
            </p>
          </div>
        </AnimatedDiv>
        <AnimatedDiv animationType="fadeIn" delay={0.35}>
          <div>
            <PortfolioButton
              style="w-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1"
              Arr={Arr2}
              onFilterChange={handleFilterChange} // Pass the filter function to PortfolioButton
            />
          </div>
        </AnimatedDiv>
      </div>
      {/* Job Card Component - Render filtered jobs */}
      <JobCard filteredJobs={filteredJobs} />
    </Container>
  );
};

export default Career;
