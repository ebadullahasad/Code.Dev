import React, { useEffect } from "react";
import Button from "./Button";
import { IMAGES } from "../Utils/images";
import { footerDetailTable, footerPara } from "../Utils/DummyData";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AnimationDiv from "./Animation";

const Footer = () => {
  const navigate = useNavigate();

  const active = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [active]);

  return (
    <div className="bg-primaryColor">
      {/* ContactSection */}
      <div className=" bg-darkgray2 py-5">
        <AnimationDiv animationType="fadeIn" delay={0.3} triggerOnce={true}>
          <div className="md:w-[80%] w-[90%] mx-auto sm:flex-row sm:justify-between flex flex-col">
            <p className="text-white font-bold font-Barlow lg:text3 sm:text2 text7">
              Contact us for the service <br />
              you want to use.
            </p>
            <Button
              btnname="Contact Us"
              divstyle="bg-lightgray1 hover:bg-gradient-to-t hover:bg-[#5454D4] from-[#42427c] transition-all 
            duration-200 ease-linear rounded-lg w-[100px] h-[30px] mt-5 md:w-[130px] md:h-[40px] lg:my-9 md:my- sm:my-2"
              btnStyle="text-white lg:text9 md:text10 sm:text11"
              onPress={() => {
                navigate("/contact");
              }}
            />
          </div>
        </AnimationDiv>
      </div>

      {/* FooterSection */}
      <div className="md:w-[80%] w-[90%] mx-auto flex md:flex-row md:gap-10 justify-between flex-col gap-5 md:mt-24 md:pb-10 py-5">
        {/* Logo */}
        <div>
          <AnimationDiv animationType="fadeIn" delay={0.4} triggerOnce={true}>
            <img
              className="lg:w-[85px] md:w-[80px] md:h-[15px] w-[50px] h-[10px] object-contain"
              src={IMAGES.CODEDEV_LOGO}
              alt={IMAGES.CODEDEV_LOGO}
            />
          </AnimationDiv>
        </div>
        {/* QuickLinks */}
        <AnimationDiv animationType="fadeIn" delay={0.4} triggerOnce={true}>
          <div>
            {footerDetailTable &&
              footerDetailTable.map((item, ind) => (
                <div
                  className="flex md:flex-row flex-col lg:gap-4 md:gap-2"
                  key={ind}
                >
                  {item &&
                    item.links.map((items, ind) => (
                      <div key={ind}>
                        <Link to={items.href}>
                          <p className="text-white cursor-pointer lg:text10 md:text11 text10">
                            {items.name}
                          </p>
                        </Link>
                      </div>
                    ))}
                </div>
              ))}
          </div>
        </AnimationDiv>

        {/* Footer_Para */}
        <AnimationDiv animationType="fadeIn" delay={0.4} triggerOnce={true}>
          <div>
            <p className="text-white lg:text11 md:text12 text9">{footerPara}</p>
          </div>
        </AnimationDiv>
      </div>
    </div>
  );
};

export default Footer;
