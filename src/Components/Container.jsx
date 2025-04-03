// import { TbRuler3 } from "reac  t-icons/tb";

const Container = ({ children }) => {
  return (
    <div className="w-full">
      <div className="w-full h-auto bg-primaryColor">
        <div className="md:w-[80%] w-[90%] mx-auto lg:py-16 md:py-10 py-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
