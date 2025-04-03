import React, { useState } from "react";

const steps = [
  {
    title: "Requirements",
    content:
      "In the requirement-gathering phase, we delve into the depths of your vision, needs, and aspirations.",
  },
  {
    title: "Analysis and Planning",
    content:
      "This phase involves analyzing the requirements and planning the project structure and resources.",
  },
  {
    title: "Design and Prototyping",
    content:
      "We create wireframes and prototypes to visualize the final product.",
  },
  {
    title: "Software Development",
    content:
      "Our team starts coding the software based on the approved designs and requirements.",
  },
  {
    title: "QA and Testing",
    content:
      "Extensive testing is conducted to ensure the product meets the highest quality standards.",
  },
  {
    title: "Deployment",
    content: "The product is deployed to the production environment for use.",
  },
  {
    title: "Maintenance and Updates",
    content:
      "Ongoing support and updates are provided to keep the software running smoothly.",
  },
];

const desc = `At Geeks of Kolachi, our SDLC stands as the cornerstone of our
        development process, fueling the collaboration and synergy of our coding
        wizards. By diligently adhering to this well-defined and efficient
        process, we empower ourselves to navigate through challenges, uphold
        unwavering quality standards, and present our valued clients with
        leading-edge solutions.`;
function Stepper() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleSliderChange = (e) => {
    setCurrentStep(Number(e.target.value));
  };

  const handlePointClick = (index) => {
    setCurrentStep(index);
  };

  return (
    <div className="py-16">
      <h1 className="text1 font-bold text-whiteColor">
        Our Path to Perfection
      </h1>
      <p className="text-lightgray6 py-6">{desc}</p>

      {/* Slider with Points */}
      <div className="relative flex flex-col items-center mb-10">
        {/* Slider */}
        <input
          type="range"
          min="0"
          max={steps.length - 1}
          value={currentStep}
          onChange={handleSliderChange}
          className="w-full h-[1px] bg-lightgray2 rounded-full appearance-none cursor-pointer"
        />

        {/* Points */}
        <div className="absolute top-0 w-full flex justify-between items-center -mt-[7px]">
          {steps.map((item, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full transition-colors duration-300 cursor-pointer ${
                currentStep === index ? "bg-red-500" : "bg-lightgray2"
              }`}
              onClick={() => handlePointClick(index)} // Adding onClick handler to points
            >
              <p
                className={`md:text-sm md:flex hidden text-[8px] md:py-6 
                text-lightgray2
              `}
              >
                <span className="">{item.title}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Section */}
      <div className="flex items-center justify-between md:py-10">
        <div>
          <h2 className="text8 font-semibold text-whiteColor">
            Stage 0{currentStep + 1}
          </h2>
          <div className="h-1 bg-whiteColor md:w-24 w-14 "></div>
          <h3 className="text7 py-2 font-semibold text-whiteColor ">
            {steps[currentStep].title}
          </h3>
          <p className="text8 text-whiteColor">{steps[currentStep].content}</p>
        </div>
        <div className="text-6xl mt-6">💡</div>
      </div>
    </div>
  );
}

export default Stepper;
