import Button from "../Components/Button";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useState, useRef } from "react";
import { GoHome } from "react-icons/go";
import { MdMiscellaneousServices } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import { TbLogs } from "react-icons/tb";
import { SiAirbyte } from "react-icons/si";
import { GrContactInfo } from "react-icons/gr";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const HeadersLinks = [
    { name: "Home", href: "/", icon: <GoHome /> },
    { name: "Services", href: "services", icon: <MdMiscellaneousServices /> },
    { name: "Work", href: "work", icon: <AiOutlineFundProjectionScreen /> },
    { name: "About", href: "aboutus", icon: <MdOutlineRoundaboutLeft /> },
    { name: "Career", href: "career", icon: <SiAirbyte /> },
    { name: "Blogs", href: "blog", icon: <TbLogs /> },
    { name: "Contact", href: "contact", icon: <GrContactInfo /> },
  ];

  const handleOpen = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="w-full bg-primaryColor py-6">
        <div className="md:w-[80%] w-[90%] mx-auto flex items-center justify-between">
          <Link to="/">
            <h1 className="text5 font-semibold cursor-pointer text-whiteColor">
              Code.Dev
            </h1>
          </Link>

          {/* Nav Link  */}
          <div className="lg:flex hidden items-center justify-center">
            {HeadersLinks.map((items, ind) => (
              <NavLink
                key={ind}
                to={items.href}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-[2px] border-gradient-to-t border-[#5454D4] from-[#42427c]"
                    : ""
                }
              >
                <li className="list-none font-medium text10 cursor-pointer px-4 pb-2 text-whiteColor">
                  {items.name}
                </li>
              </NavLink>
            ))}
          </div>
          {/* Nav Link  */}

          <div className="flex items-center justify-center gap-4">
            {/* Contact Us Button  */}
            <Link to={"/contact"}>
              <Button
                btnname="Contact Us"
                btnStyle="bg-lightgray1 md:px-6 hover:bg-gradient-to-t hover:bg-[#5454D4] from-[#42427c] 
              rounded-lg transition-all duration-200 ease-in px-5 md:py-3 py-2 text9 text-whiteColor rounded-md whitespace-nowrap"
                divstyle=""
                onPress={() => navigate("/contact")}
              />
            </Link>
            {/* Contact Us Button  */}

            {/* HamBurger Icon  */}
            <div className="lg:hidden flex" onClick={handleOpen}>
              {menuOpen ? (
                <IoCloseOutline className="text-whiteColor text2" />
              ) : (
                <RxHamburgerMenu className="text-whiteColor text2" />
              )}
            </div>
            {/* HamBurger Icon  */}
          </div>
        </div>

        {/* Mobile Screen Menu Section  */}
        {menuOpen && (
          <div
            className="w-full lg:hidden z-50 fixed mx-auto pt-28 transform left-0 h-full transition-all 
          duration-300 ease-in-out bg-primaryColor"
          >
            {/* Nav Link  */}
            <div className="flex flex-col items-center justify-center">
              {HeadersLinks.map((items, ind) => (
                <NavLink
                  key={ind}
                  to={items.href}
                  className={({ isActive }) =>
                    isActive ? "border-b-[2px]  border-lightblue" : ""
                  }
                >
                  <div className="flex items-center justify-center px-4 gap-2">
                    <li
                      onClick={handleOpen}
                      className="list-none font-medium text6 cursor-pointer py-4 text-whiteColor"
                    >
                      {items.name}
                    </li>
                    <div className="text-whiteColor text5">{items.icon}</div>
                  </div>
                </NavLink>
              ))}
            </div>
            {/* Nav Link  */}
          </div>
        )}
        {/* Mobile Screen Menu Section  */}
      </div>
    </>
  );
};

export default Header;
