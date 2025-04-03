import Button from "../../../Components/Button";
import { IMAGES } from "../../../Utils/images";

const ServiceBanner = () => {
  return (
    <main className={`text-white bg-hero-pattern bg-no-repeat bg-center flex items-center md:flex-row flex-col-reverse justify-between md:gap-10 gap-10 pb-20`}>
      {/* Banner Text */}

      <div className="md:w-[40%] ">
        <h3 className="text1 font-semibold py-2">Creative UI/UX Design Services</h3>
        <p className="mb-4 text10">rom wireframing to prototyping, our creative UI/UX designers combine strategic thinking and creative expertise to deliver visually captivating designs.</p>
        <Button btnname="Unlock Design Brilliance" btnStyle="md:p-4 p-2 bg-lightgray1 rounded-lg text9" />

      </div>
      {/* Banner Image */}
      <div className="md:w-50%  " >

        <img className="lg:w-[500px] md:w-[400px] w-[500px]" src={IMAGES.SERVICEBANNERICON} alt={IMAGES.SERVICEBANNERICON} />

      </div>
    </main>
  );
};

export default ServiceBanner;
