// import { Link } from "react-router-dom";
// import Button from "../../../Components/Button";
// import { heroSecText } from "../../../Utils/DummyData";

// const TopSection = () => {

//   return (
//     <div className="text-whiteColor text-center md:pt-6">
//       {heroSecText.map((text, ind) => {
//         return (
//           <h1 key={ind} className="preheading font-semibold">
//             {text}
//           </h1>
//         );
//       })}

//       <div className="flex items-center justify-center flex-wrap gap-2 text7 text-lightgray3 py-14">
//         for{" "}
//         <span className="bg-darkgray2 rounded-md text-whiteColor px-3 py-1">
//           Startups
//         </span>{" "}
//         ,{" "}
//         <span className="bg-darkgray2 rounded-md text-whiteColor px-3 py-1">
//           E-commerce Brands
//         </span>{" "}
//         ,{" "}
//         <span className="bg-darkgray2 rounded-md text-whiteColor px-3 py-1">
//           Small & Medium Businesses
//         </span>{" "}
//         , and{" "}
//         <span className="bg-darkgray2 rounded-md text-whiteColor px-3 py-1">
//           Enterprise Leaders
//         </span>
//       </div>

//       {/* Our Work Button  */}
//       <Link to="/work">
//         <Button
//           btnname="Our Work"
//           btnStyle="border-[1px] hover:border-none border-lightgray3 hover:bg-gradient-to-t hover:bg-[#5454D4] from-[#42427c] rounded-lg transition-all duration-200 ease-in md:px-12 px-8 text9 md:py-3 py-2 text-whiteColor font-medium"
//         />
//       </Link>
//       {/* Our Work Button  */}
//     </div>
//   );
// };

// export default TopSection;

import { Link } from "react-router-dom";
import Button from "../../../Components/Button";
import { heroSecText } from "../../../Utils/DummyData";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";
import AnimatedDiv from "../../../Components/Animation";

const TopSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      containerRef.current.style.visibility = "visible";

      // Select all heading lines
      const headings = Array.from(
        containerRef.current.querySelectorAll(".animated-text")
      );

      headings.forEach((heading, index) => {
        const { words } = splitText(heading);

        // Delay each heading's animation separately
        animate(
          words,
          { opacity: [0, 1], y: [10, 0] },
          {
            type: "spring",
            duration: 2, // Slightly faster animation
            // bounce: 0,
            // delay: stagger(0.05), // NEW: Adds delay for each line
          }
        );
      });
    });
  }, []);

  return (
    <div className="text-whiteColor text-center md:pt-6 visibility-hidden">
      <AnimatedDiv animationType="fadeIn" delay={0.3}>
        {heroSecText.map((text, ind) => (
          <h1 key={ind} className="preheading font-semibold animated-text">
            {text}
          </h1>
        ))}
      </AnimatedDiv>

      <AnimatedDiv animationType="fadeIn" delay={0.3}>
        <div className="flex items-center justify-center flex-wrap gap-2 text7 text-lightgray3 py-14">
          for{" "}
          <span className="bg-darkgray2 rounded-md text-whiteColor px-3 py-1">
            Startups
          </span>
          ,{" "}
          <span className="bg-darkgray2 rounded-md text-whiteColor px-3 py-1">
            E-commerce Brands
          </span>
          ,{" "}
          <span className="bg-darkgray2 rounded-md text-whiteColor px-3 py-1">
            Small & Medium Businesses
          </span>
          , and{" "}
          <span className="bg-darkgray2 rounded-md text-whiteColor px-3 py-1">
            Enterprise Leaders
          </span>
        </div>
      </AnimatedDiv>

      {/* Our Work Button */}
      <AnimatedDiv animationType="fadeIn" delay={0.3}>
        <Link to="/work">
          <Button
            btnname="Our Work"
            btnStyle="border-[1px] hover:border-none border-lightgray3 hover:bg-gradient-to-t hover:bg-[#5454D4] from-[#42427c] rounded-lg transition-all duration-200 ease-in md:px-12 px-8 text9 md:py-3 py-2 text-whiteColor font-medium"
          />
        </Link>
      </AnimatedDiv>
    </div>
  );
};

export default TopSection;
