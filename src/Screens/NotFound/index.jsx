import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import { IMAGES } from "../../Utils/images";

const NotFound = () => {
  const navigate = useNavigate();

  const Images = () => (
    <>
      <img
        src={IMAGES.ELLIPSE1}
        className="w-[70px] absolute left-0 top-0 lg:w-[130px]"
      />
      <img
        src={IMAGES.FRAME}
        className="absolute w-[55px] left-4 top-96 lg:w-[100px] lg:left-10 lg:top-72 md:w-[80px] md:left-8 md:top-64 sm:w-[65px] sm:left-8 sm:top-72"
      />

      <img
        src={IMAGES.ELLIPSE2}
        className="absolute w-[60px] h-[90px] lg:w-[100px] lg:h-[160px] md:w-[65px] md:h-[100px] sm:w-[80px] sm:h-[80px] right-0 top-0"
      />

      <img
        src={IMAGES.FRAME}
        className="absolute bottom-6 w-[50px] right-14 lg:w-[100px] md:w-[80px] md:right-6 sm:w-[65px] sm:right-5"
      />
    </>
  );
  return (
    <div className="relative w-full flex items-center justify-center h-screen dark:bg-whiteColor bg-blackColor">
      {Images()}
      <div className="md:w-[80%] lg:max-w-[350px] md:max-w-[300px] sm:max-w-[250px] w-[90%] text-center">
        <p className="mainheading font-bold text-white dark:text-black">404</p>
        <p className="text2 font-bold text-white dark:text-black">
          Page Not Found
        </p>
        <p className="mt-3 px-1 text14 md:mt-4 md:px-6 text-white dark:text-black">
          This page doesn’t exist or was removed! We suggest you go back to
          home.
        </p>
        <Button
          onPress={() => navigate("/")}
          divstyle="bg-goldColor rounded-3xl text-white text-[12px] mt-4 mb-2 py-2 px-10 
                md:mt-5 md:mb-5 md:py-2 md:px-12 dark:bg-blackColor dark:text-white dark:border-white"
          type="submit"
          btnname="Go to Home"
        />
      </div>
    </div>
  );
};

export default NotFound;
