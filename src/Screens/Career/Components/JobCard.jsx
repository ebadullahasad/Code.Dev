// import React from "react";
import { useState } from "react";
import Button from "../../../Components/Button";
import ApplyPopup from "../Components/ApplyPopup";
import AnimatedDiv from "../../../Components/Animation";

const JobCard = ({ filteredJobs }) => {
  const [ModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <AnimatedDiv animationType="fadeIn" delay={0.5}>
        <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center lg:gap-6 md:gap-4 gap-3 md:py-16 py-6">
          {filteredJobs.map((items, ind) => (
            <div
              key={ind}
              className="bg-secondaryColor rounded-lg p-4 flex items-center justify-between"
            >
              <div>
                <h1 className="text-whiteColor text9">{items.title}</h1>
                <p className="text-lightgray4 py-2 text11 md:w-[90%]">
                  {items.desc}
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    btnname={items.jobType}
                    divstyle="border-[1px] text13 flex items-center border-mutedgray rounded-full px-2 py-1 text-lightgray2"
                    image={items.location}
                    imagediv="flex items-center gap-1"
                    imageStyle="md:w-3 w-2 object-contain"
                  />
                  <Button
                    btnname={items.JobTime}
                    divstyle="border-[1px] flex items-center text13 border-mutedgray rounded-full px-2 py-1 text-lightgray2"
                    image={items.clock}
                    imagediv="flex items-center gap-1"
                    imageStyle="md:w-3 w-2 object-contain"
                  />
                </div>
              </div>
              <Button
                btnname={"Apply"}
                onPress={() => setModalOpen(true)}
                btnStyle="bg-lightgray1 gradient text-whiteColor py-3 lg:px-8 md:px-6 px-8 text9 rounded-lg"
              />
            </div>
          ))}
          {/* <ApplyPopup /> */}
        </div>
      </AnimatedDiv>
      {ModalOpen ? (
        <ApplyPopup setModalOpen={setModalOpen} openModel={ModalOpen} />
      ) : null}
    </>
  );
};

export default JobCard;
