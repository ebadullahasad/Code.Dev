import React from "react";
import { ApplyPopupDeatils } from "../../../../Utils/DummyData";

const LefSection = () => {
  return (
    // {/* LeftDiv */}
    <div className="md:w-[45%] w-full">
      <div className="md:mx-0 w-full">
        <p className="font-Barlow font-bold text4 text-white">
          Open Application
        </p>

        {ApplyPopupDeatils &&
          ApplyPopupDeatils.map((val, ind) => (
            <div className="mt-6" key={ind}>
              {val.contentHeading && (
                <p className="font-Barlow font-semibold text9">
                  {val.contentHeading}
                </p>
              )}
              {val.content && (
                <p className="font-NunitoSans text9 mt-2 mb-6">
                  {val.content}
                </p>
              )}
              {val.title && (
                <p className="font-Barlow font-semibold text9">{val.title}</p>
              )}
              {val.points &&
                val.points.map((item, ind) => (
                  <ul className="list-disc px-5" key={ind}>
                    <li className="font-NunitoSans text9 mt-3">{item}</li>
                  </ul>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default LefSection;
