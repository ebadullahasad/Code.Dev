import React from "react";

function DropDown({ selectValue, onSelect, className,optionStyle }) {
  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    onSelect(selectedOption); // Notify parent about the change
  };

  return (
    <select
      onChange={handleSelectChange}
      className={
        className
          ? className
          : `w-full border border-primaryColor text-primaryColor
     bg-transparent font-medium py-2 text12 rounded-md outline-none mb-2 px-2`
      }
    >
      {selectValue?.map((value, index) => (
        <option className={`${optionStyle ? optionStyle : "bg-secondaryColor"}`} key={index} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}

export default DropDown;
