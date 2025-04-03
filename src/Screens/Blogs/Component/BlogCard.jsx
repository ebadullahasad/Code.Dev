import React from "react";
import { Link } from "react-router-dom";
import AnimatedDiv from "../../../Components/Animation";
const BlogCard = ({ filteredBlogs }) => {
  // console.log("filteredBlogs",filteredBlogs);
  return (
    <AnimatedDiv animationType="fadeIn" delay={0.6} triggerOnce={true}>
      <div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 custom:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3">
          {filteredBlogs.map((member, ind) => (
            <Link to="/blogdetail">
              <div
                key={ind}
                className="bg-secondaryColor text-white rounded-lg overflow-hidden pb-4"
              >
                {/* CardDiv */}
                <div className="h-[200px] relative">
                  <img
                    src={member?.user?.profile_image}
                    className="w-full md:object-fill object-right-top h-[100%]"
                  />
                </div>
                {/* CardText */}
                <div className="px-2">
                  <h3 className="text-white font-Barlow font-semibold mt-4 line-clamp-1">
                    {member?.title}
                  </h3>
                  <p className="text-lightgray3 font-NunitoSans md:text11 text10 mt-2 line-clamp-2">
                    {member?.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default BlogCard;
