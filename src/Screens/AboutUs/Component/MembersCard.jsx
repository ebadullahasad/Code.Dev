import AnimatedDiv from "../../../Components/Animation";
import { tmData, tmheading, tmpara } from "../../../Utils/DummyData";
import { IMAGES } from "../../../Utils/images";
const MemberCard = () => {
  return (
    <div>
      {/* HeadingTeamMembers */}
      <AnimatedDiv animationType="fadeIn" delay={0.35} triggerOnce={true}>
        <div className="flex sm:flex-row sm:justify-between flex-col mx-auto">
          <p className="text-white font-semibold font-Barlow lg:text6  sm:text4 text2 ">
            {tmheading}
          </p>
          <div className="sm:w-[50%]">
            <p className="text-lightgray3 sm:text11 text10">{tmpara}</p>
          </div>
        </div>
      </AnimatedDiv>

      {/* CardTeamMembers */}
      <AnimatedDiv animationType="fadeIn" delay={0.4} triggerOnce={true}>
        <div className="md:mb-16 mb-8 mt-3">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 custom:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3">
            {tmData.map((member, ind) => (
              <div
                key={ind}
                className="bg-secondaryColor text-white rounded-lg pb-4 overflow-hidden"
              >
                {/* CardDiv */}
                <div className="h-[200px] relative">
                  <img
                    src={member.img}
                    className="w-full md:object-fill object-right-top h-[100%]"
                  />
                  <img
                    src={IMAGES.PROJECTMANAGERLOGO}
                    className="absolute brightness-25 lg:w-[85px] lg:h-[25px] md:w-[80px] md:h-[25px] sm:w-[90px] sm:h-[30px] w-[90px] h-[25px] top-2 left-2"
                  />
                </div>
                {/* CardText */}
                <div className="px-2">
                  <h3 className="text-white font-Barlow font-semibold mt-4">
                    {member.name}
                  </h3>
                  <p className="text-lightgray3 font-NunitoSans md:text12 text10">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedDiv>
    </div>
  );
};

export default MemberCard;
