import React, { useEffect } from "react";
import LefSection from "./LefSection";
import RightSection from "./RightSection";
import { IMAGES } from "../../../../Utils/images";

const ApplyPopup = ({ setModalOpen, openModel }) => {
  useEffect(() => {
    if (openModel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModel]);
  return (
    <>
      {/* Full Screen Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        onClick={() => setModalOpen(false)}
      >
        {/* Modal */}
        <div className="relative w-[70%] md:w-[80%] h-[600px]">
        <div onClick={() => setModalOpen(false)} >
          <img
            className="absolute -top-2 -right-2 cursor-pointer w-[30px] h-[30px] z-50"
            src={IMAGES.CLOSE_BUTTON}
            alt="Close"
          />
        </div>
          <div
            className="w-[100%] h-[100%] bg-darkgray2   text-white py-10 overflow-auto custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-[90%] flex md:flex-row flex-col-reverse gap-4 mx-auto">
              <LefSection />
              <RightSection />
            </div>
          </div>
          {/* Close Button - Positioned Outside the Modal */}
        </div>
      </div>
    </>
  );
};

export default ApplyPopup;
