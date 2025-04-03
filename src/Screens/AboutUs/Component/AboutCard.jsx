// import React, { useState } from "react";
// import { cardAboutUs } from "../../../Utils/DummyData";
// import HoverCard from "./HoverCard";

// const AboutUsCard = () => {
//   const [activeCard, setActiveCard] = useState(null);

//   return (
//     <div className="sm:w-[80%] min-h-screen w-[90%] mx-auto">
//       {/* Cards */}
//       <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-8 relative">
//         {cardAboutUs.map((data, ind) => (
//           <div
//             key={ind}
//             onMouseEnter={() => setActiveCard(ind)}
//             onMouseLeave={() => setActiveCard(null)}
//             className="rounded-lg p-4 bg-secondaryColor cursor-pointer"
//           >
//             <div className="h-[200px] mx-auto flex flex-col items-center justify-center">
//               <img src={data.img} className="md:w-[60px] h-[50px]" alt="icon" />
//               <p className="text-white md:text8 sm:text7 text2 text-center mt-2">
//                 {data.para}
//               </p>

//             {activeCard === ind && (
//               <div className="absolute top-0 left-0">
//                 <HoverCard ind1={ind} />
//               </div>
//             )}
//           </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AboutUsCard;

import { useState } from "react";
import { cardAboutUs, cardHoverData } from "../../../Utils/DummyData";
import AnimatedDiv from "../../../Components/Animation";

const AboutCard = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="card-container mt-14">
      {/* Why Choose Us */}
      <div className="mb-5">
        <AnimatedDiv animationType="fadeIn" delay={0.5} triggerOnce={true}>
          <p className="text-white lg:text4 text5 text-center font-semibold font-Barlow">
            Why Choose Us
          </p>
        </AnimatedDiv>
      </div>

      {/* HoverCards */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {cardAboutUs.map((data, ind) => (
          <div
            key={ind}
            onMouseEnter={() => setActiveCard(ind)}
            onMouseLeave={() => setActiveCard(null)}
            className="card relative p-4 rounded-lg bg-secondaryColor transform transition-all cursor-pointer"
          >
            {/* FrontCard */}
            <AnimatedDiv animationType="fadeIn" delay={0.6} triggerOnce={true}>
              <div className="flex h-[200px] flex-col items-center justify-center">
                <img
                  src={data.img}
                  className="md:w-[60px] h-[50px]"
                  alt="icon"
                />
                <p className="text-white md:text8 sm:text7 text2 text-center mt-2">
                  {data.para}
                </p>
              </div>
            </AnimatedDiv>

            {/* BackCard */}
            <div className="back bg-lightblue rounded-lg inset-0 text-white p-4 flex items-center justify-center">
              {/* {activeCard === ind && <HoverCard ind1={ind} /> */}
              {cardHoverData &&
                cardHoverData.map((item, ind) => (
                  <div key={ind} className="flex flex-col items-start">
                    {activeCard === ind && (
                      <>
                        <p className="text-white md:text9 sm:text7 text7">
                          {item.heading}
                        </p>
                        <p className="text-lightgray3 md:text10 sm:text7 text8 mt-4">
                          {item.para}
                        </p>
                      </>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCard;
