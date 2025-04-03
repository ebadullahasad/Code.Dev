import { useState } from "react";
import { ServicesData } from "../../../Utils/DummyData";
import AnimatedDiv from "../../../Components/Animation";

const ServiceCard = () => {
  const [active, setActive] = useState(null);

  const mouseEnter = (index) => {
    setActive(index);
  };

  return (
    <>
      {/* ServiceCards */}
      <AnimatedDiv animationType="fadeIn" delay={0.3}>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-4">
          {ServicesData &&
            ServicesData.map((item, ind) => (
              <div
                className={`p-4 rounded-lg ${
                  active === ind ? `gradient cursor-pointer` : ""
                }`}
                key={ind}
                onMouseEnter={() => mouseEnter(ind)}
                onMouseLeave={() => setActive(null)}
              >
                <div className="">
                  <div className="w-16 h-16 mx-auto relative rounded-full flex items-center justify-center">
                    <div
                      style={{
                        backgroundColor:
                          active === ind ? item.hoverColor : item.bgcolor,
                      }}
                      className="opacity-10 inset-0 absolute rounded-full"
                    ></div>
                    <img
                      src={active === ind ? item.whiteImg : item.icon}
                      className="w-10 h-10"
                    />
                  </div>

                  <h3 className="text9 font-NunitoSans text-white font-semibold text-center mt-4">
                    {item.title}
                  </h3>
                  <div>
                    <p className="text-lightgray4 text-center mt-2">
                      {item.para}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </AnimatedDiv>
      {/* ServiceCards */}
    </>
  );
};

export default ServiceCard;
