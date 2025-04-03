import React, { useEffect, useState } from "react";
import InputField from "../../../Components/InputField";
import { IMAGES } from "../../../Utils/images";
import { NavLink } from "react-router-dom";
import AnimatedDiv from "../../../Components/Animation";

const FilterSection = ({ onFilterChange }) => {
  const filterData = [
    {
      title: "All",
      value: "all",
    },
    {
      title: "Web Development",
      value: "web-development",
    },
    {
      title: "Design",
      value: "design",
    },
    {
      title: "Quality Assurance",
      value: "Quality Assurance",
    },
    {
      title: "Business",
      value: "Business",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  const toggleAnswer = (index) => {
    setActiveIndex(index);
  };

  const handleFilter = (value) => {
    onFilterChange(value); // Notify parent component about the filter change
    setActiveIndex(filterData.findIndex((btn) => btn.value === value)); // Set active button
  };

  const handleValue = (event) => {
    setSearchValue(event.target.value);
  };
  console.log("serachValue", searchValue);

  return (
    <AnimatedDiv animationType="fadeIn" delay={0.35}>
      <div className="md:pb-6 pb-4 flex md:flex-row flex-col-reverse md:gap-0 gap-4 items-center justify-between">
        <div className="flex flex-wrap text-center justify-center md:gap-1">
          {filterData.map((data, index) => (
            <NavLink
              onClick={() => handleFilter(data.value)}
              key={index}
              className={({ isActive }) =>
                activeIndex === index ? "border-b-[2px]  border-[#5454D4] " : ""
              }
            >
              <button className="text-lightgray6 text11 px-2 pb-1">
                {data.title}
              </button>
            </NavLink>
          ))}
        </div>
        <div>
          <InputField
            onChange={(e) => handleValue(e)}
            placeholder="Search"
            inputStyle="bg-transparent text-whiteColor py-2 text11 font-normal"
            leadingImage={IMAGES.SEARCH_ICON}
            imageStyle="w-[14px]"
            innerDiv="flex flex-row-reverse items-center justify-center gap-4 border-[1px] px-4 
        border-borderColor2 rounded-md"
          />
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default FilterSection;
