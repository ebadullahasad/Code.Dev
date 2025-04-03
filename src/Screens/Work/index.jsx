// import { Link } from "react-router-dom";
// import PortfolioButton from "../../Components/PortfolioButton";
// import { Arr, IMG } from "../../Utils/DummyData";
// import Container from "../../Components/Container";

// const Work = () => {
//   return (
//     <Container>
//       {/* Our Portfolio Section  */}
//       <div>
//         <h1 className="text-whiteColor text-center font-bold text2">
//           Our Awesome Portofolio
//         </h1>
//         <PortfolioButton style="mx-auto grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1" Arr={Arr} />
//       </div>
//       {/* Our Portfolio Section  */}
//       <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4 justify-between items-center">
//         {IMG.map((item, ind) => (
//           <Link to={item.link} target="_blank" key={ind}>
//             <img
//               className=" mx-auto p-3 object-contain bg-secondaryColor rounded-xl"
//               src={item.img}
//               alt={item.img}
//             />
//           </Link>
//         ))}
//       </div>
//     </Container>
//   );
// };

// export default Work;

import { useState } from "react";
import { Link } from "react-router-dom";
import PortfolioButton from "../../Components/PortfolioButton";
import { Arr, IMG } from "../../Utils/DummyData";
import Container from "../../Components/Container";
import AnimatedDiv from "../../Components/Animation";

const Work = () => {
  const [filteredCategory, setFilteredCategory] = useState("All");

  // Handle the category filter change
  const handleFilterChange = (category) => {
    setFilteredCategory(category);
  };

  // Filter images based on the selected category
  const filteredImages = IMG.filter((item) =>
    filteredCategory === "All" ? true : item.value === filteredCategory
  );

  return (
    <Container>
      {/* Our Portfolio Section */}
      <div>
        <AnimatedDiv animationType="fadeIn" delay={0.3}>
          <h1 className="text-whiteColor text-center font-bold text2">
            Our Awesome Portfolio
          </h1>
        </AnimatedDiv>
        <AnimatedDiv animationType="fadeIn" delay={0.35}>
          <PortfolioButton
            style="mx-auto grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1"
            Arr={Arr}
            onFilterChange={handleFilterChange}
          />
        </AnimatedDiv>
      </div>

      {/* Display Filtered Images */}
      <AnimatedDiv animationType="fadeIn" delay={0.5} triggerOnce={false}>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4 justify-between items-center">
          {filteredImages.map((item, ind) => (
            <Link to={item.link} target="_blank" key={ind}>
              <img
                className="mx-auto p-3 object-contain bg-secondaryColor rounded-xl"
                src={item.img}
                alt={item.img}
              />
            </Link>
          ))}
        </div>
      </AnimatedDiv>
    </Container>
  );
};

export default Work;
