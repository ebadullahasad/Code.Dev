import React, { useState } from "react";
import { IMAGES } from "../../../Utils/images";
import { infoDetail, ceoData } from "../../../Utils/DummyData";
const InfoForm = () => {
  const [active, setActive] = useState(null); 

  const handleOpen = (index) => {
    setActive(active === index ? null : index);
    console.log("hello",active)
  };

  return (
    <div className="md:w-[45%] w-full">
      {infoDetail &&
        infoDetail.map((val, ind) => (
          <div
            key={ind}
            className="text-white flex justify-between bg-secondaryColor p-4 mb-5"
          >
            <div>
              <p>{val.title}</p>
              <p className="font-poppins font-medium">
                {active === ind ? val.para : null}
              </p>
            </div>
            <div
              onClick={() => handleOpen(ind)} // Pass index on click
              className={`w-[30px] cursor-pointer  ${
                active === ind ? "rotate-90 ease-in animate-pulse " : "rotate-0 animate-bounce"
              } h-[30px] p-2 border-2 border-white`}
            >
              <img src={IMAGES.RIGHTARROW} alt="arrow" />
            </div>
          </div>
        ))}

      <div className="flex space-x-4 ">
        {ceoData.ceoInfo.socialIcons.map((icon, ind) => (
          <img
            key={ind}
            src={icon.img}
            alt={`social-icon-${ind}`}
            className="w-6 h-6"
          />
        ))}
      </div>
    </div>
  );
};

export default InfoForm;
