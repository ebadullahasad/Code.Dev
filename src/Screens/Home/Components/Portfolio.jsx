import PortfolioButton from "../../../Components/PortfolioButton";
import { Arr, IMG } from "../../../Utils/DummyData";
import { IMAGES } from "../../../Utils/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import AnimatedDiv from "../../../Components/Animation";

const Portfolio = () => {
  const [filteredCategory, setFilteredCategory] = useState("All");

  // Handle the category filter change
  const handleFilterChange = (category) => {
    setFilteredCategory(category);
  };

  // Filter images based on the selected category
  const filteredImages = IMG.filter((item) =>
    filteredCategory === "All" ? true : item.value === filteredCategory
  );

  return (
    <div className="w-full md:py-16 py-8 text-center">
      <AnimatedDiv animationType="fadeIn" delay={0.35} triggerOnce={true}>
        <h1 className="text-whiteColor font-bold text2">
          Our Awesome Portfolio
        </h1>
      </AnimatedDiv>
      <AnimatedDiv animationType="fadeIn" delay={0.4} triggerOnce={true}>
        <PortfolioButton
          style="mx-auto grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1"
          Arr={Arr}
          onFilterChange={handleFilterChange}
        />
      </AnimatedDiv>

      <AnimatedDiv animationType="fadeIn" delay={0.5} triggerOnce={true}>
        <div className="relative w-full grid grid-cols-3 gap-4 md:mt-8">
          {filteredImages.splice(0, 3).map((item, ind) => (
            <div className="bg-secondaryColor flex p-5 rounded-xl ">
              <img
                className="lg:w-[390px] md:w-[350px] w-[500px] object-contain mx-auto"
                src={item.img}
                alt={`Portfolio Image ${ind + 1}`}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </AnimatedDiv>
    </div>
  );
};

export default Portfolio;
