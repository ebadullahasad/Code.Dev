import React from "react";
import Container from "../../Components/Container";
import { PrivacyPolicyData } from "../../Utils/DummyData";

const PrivacyPolicy = () => {
  return (
    <Container>
      {PrivacyPolicyData.map((items, ind) => (
        <div>
          <div className="flex items-center justify-between pb-2">
            <p className="text-lightgray2 text10">{items.name}</p>
            <p className="text-lightblue text10">{items.lastUpdate}</p>
          </div>
          <h1 className="text-whiteColor text3 font-bold md:pb-8 pb-6">
            {items.heading}
          </h1>
          {items.mainSection.map((item, i) => (
            <div>
              <h1 className="text-whiteColor text9 pb-2">{item.subHead}</h1>
              <p className="text-lightgray6 text11 md:pb-8 pb-6">{item.para}</p>
            </div>
          ))}
        </div>
      ))}
    </Container>
  );
};

export default PrivacyPolicy;
