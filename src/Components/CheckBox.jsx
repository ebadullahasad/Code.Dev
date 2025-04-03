import React, { useState } from "react";
import { IMAGES } from "../Utils/Images";


const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div>
        <div
          onClick={handleCheckbox}
          className={`${
            isChecked ? "bg-transparent" : "bg-secondaryColor"
          }  cursor-pointer flex items-center justify-center
          lg:w-[20px] md:w-[24px] sm:w-[20px] w-[18px] lg:h-[24px] md:h-[16px] 
          sm:h-[14px] h-[18px]`}
        >
            <img
              className="w-[20px] h-[20px]"
              src={isChecked ? IMAGES.BOX : IMAGES.TICK1}
              alt={IMAGES.TICKMARK}
            />
      
        </div>
      </div>
    </>
  );
};

export default CheckBox;
