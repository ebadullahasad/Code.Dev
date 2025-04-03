// import { useEffect, useState } from "react";
// import Button from "./Button";
// import { getData, filterData } from "../ServicesFunctions/Filter";

// const PortfolioButton = ({ style, Arr }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [filterdCategory, setFilterdCategory] = useState([]);

//   useEffect(() => {
//     setFilterdCategory(getData());
//   }, []);

//   const toggleAnswer = (index) => {
//     setActiveIndex(index);
//   };

//   const handleFilter = (value) => {
//     if (value !== "All") {
//       setFilterdCategory(filterData(value));
//     } else {
//       setFilterdCategory(getData());
//     }
//   };
//   // console.log(filterdCategory);

//   return (
//     <div className="md:py-12 py-6">
//       <div
//         className={` ${style} bg-secondaryColor lg:rounded-full md:rounded-3xl rounded-xl py-2 items-center justify-between px-4`}
//       >
//         {Arr &&
//           Arr.map((btn, ind) => (
//             <Button
//               onPress={() => {
//                 toggleAnswer(ind);
//                 handleFilter(btn.value);
//               }}
//               key={ind}
//               btnname={btn.name}
//               value={btn.value}
//               btnStyle={`text-whiteColor ${
//                 activeIndex === ind
//                   ? " bg-gradient-to-t bg-[#5454D4] from-[#42427c]"
//                   : ""
//               } 
//           font-normal text9 px-12 md:py-4 py-2 rounded-full`}
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default PortfolioButton;






import { useState } from "react";
import Button from "./Button";

const PortfolioButton = ({ style, Arr, onFilterChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAnswer = (index) => {
    setActiveIndex(index);
  };

  const handleFilter = (value) => {
    onFilterChange(value); // Notify parent component about the filter change
    toggleAnswer(Arr.findIndex((btn) => btn.value === value)); // Set active button
  };

  return (
    <div className="md:py-12 py-6">
      <div className={`${style} bg-secondaryColor lg:rounded-full md:rounded-3xl rounded-xl py-2 items-center justify-between px-4`}>
        {Arr &&
          Arr.map((btn, ind) => (
            <Button
              onPress={() => handleFilter(btn.value)}
              key={ind}
              btnname={btn.name}
              value={btn.value}
              btnStyle={`text-whiteColor ${activeIndex === ind ? "bg-gradient-to-t bg-[#5454D4] from-[#42427c]" : ""} font-normal text9 px-12 md:py-4 py-2 rounded-full`}
            />
          ))}
      </div>
    </div>
  );
};

export default PortfolioButton;
