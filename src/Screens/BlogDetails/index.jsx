import React from "react";
import { blogDetail } from "../../Utils/DummyData";
import Container from "../../Components/Container";
import { IMAGES } from "../../Utils/images";
import Animation from "../../Components/Animation";

const BlogDetails = () => {
  return (
    <Container>
      <div className="text-whiteColor">
        <Animation>
          <div className="flex md:flex-row flex-col items-start md:gap-4 gap-2 text11 py-2">
            <p>Published on Jun 24, 2024</p>
            <p>10 Minute Read</p>
          </div>

          {/* details */}

          <div className="md:py-4 py-2">
            <h3 className="text2 font-bold">
              {blogDetail?.introduction?.title}
            </h3>
            <div className="md:py-4 py-2">
              <h6 className="text7 py-2">Intro Duction</h6>
              <p className="text9 text-lightgray6 ">
                {blogDetail?.introduction?.description}
              </p>
            </div>
          </div>

          <div className="md:py-4 py-2">
            <h3 className="text7">{blogDetail?.overview?.title}</h3>
            <div className="md:py-4 py-2">
              <ul className="text9 text-lightgray6 list-disc sm:pl-0 pl-2">
                <li>{blogDetail?.overview?.keyPoints?.key1}</li>
                <li>{blogDetail?.overview?.keyPoints?.key2}</li>
                <li>{blogDetail?.overview?.keyPoints?.key3}</li>
              </ul>
              <div className="flex items-center md:flex-row flex-col justify-center md:gap-10 gap-4 md:py-10 py-5">
                <img
                  src={blogDetail?.overview?.stats?.img1}
                  className="md:w-[60%]"
                  alt=""
                />
                <img
                  src={blogDetail?.overview?.stats?.img2}
                  className="md:w-[40%]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Animation>

        <Animation animationType="fadeIn" delay={0.3} triggerOnce={true}>
          <div className="">
            <h3 className="text7">{blogDetail?.frequencySeverity?.title}</h3>
            <div className="md:py-4 py-2">
              <ul className="text9 text-lightgray6 list-disc py-2 sm:pl-0 pl-2">
                <li>{blogDetail?.frequencySeverity?.keyPoints?.keypoint1}</li>
                <li>{blogDetail?.frequencySeverity?.keyPoints?.keypoint2}</li>
                <li>{blogDetail?.frequencySeverity?.keyPoints?.keypoint3}</li>
              </ul>
            </div>
          </div>

          <div className="md:py-4">
            <div className="flex flex-wrap md:flex-nowrap items-center md:gap-10 gap-4">
              <ul className="text9 text-lightgray6 list-disc py-2 md:min-w-[50%] sm:pl-0 pl-2">
                <h3 className="text7 py-">{blogDetail?.costs?.title}</h3>
                <li>{blogDetail?.costs?.keyPoints?.key1}</li>
                <li>{blogDetail?.costs?.keyPoints?.key2}</li>
                <li>{blogDetail?.costs?.keyPoints?.key3}</li>
              </ul>
              <img
                src={blogDetail?.costs?.img}
                alt=""
                className="xl:w-[440px] md:w-[340px]"
              />
            </div>
          </div>

          <div className="">
            <h3 className="text7">{blogDetail?.safetyMeasures?.title}</h3>
            <div className="md:py-4 py-2">
              <ul className="text9 text-lightgray6 list-disc py-2 sm:pl-0 pl-2">
                {blogDetail?.safetyMeasures?.points.map((item, ind) => (
                  <li key={ind}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Animation>

        <Animation animationType="fadeIn" delay={0.3} triggerOnce={true}>
          <div className="">
            <div className="flex md:flex-row flex-col items-center  justify-between md:gap-10">
              <ul className="text9 text-lightgray6 list-disc  md:min-w-[50%]">
                <h3 className="text7 sm:pl-0 pl-2 ">
                  {blogDetail?.reasons?.title}
                </h3>
                <div className="md:py-4 py-2 sm:pl-0 pl-2">
                  {blogDetail?.reasons?.list?.map((item, ind) => (
                    <li key={ind} className="">
                      {item}
                    </li>
                  ))}
                </div>
              </ul>
              <div className="flex flex-col  items-center justify-center md:min-w-[50%]">
                <p className="text7">
                  Statistics by Direct Costs of Workplace Injuries in 2022
                </p>
                <img
                  src={IMAGES.STATS1}
                  alt=""
                  className="md:w-[450px] h-[350px] py-4"
                />
              </div>
            </div>
          </div>

          <div className="md:py-2">
            <div className="md:py-4 py-2">
              <h6 className="text7 py-2">Conclusion</h6>
              <p className="text9 text-lightgray6 ">
                {blogDetail?.conclusion?.description}
              </p>
            </div>
          </div>
        </Animation>
      </div>
    </Container>
  );
};

export default BlogDetails;
