import { IMAGES } from "../../../Utils/images";
import Inputfield from "../../../Components/Inputfield";

const ContactInformation = () => {
  return (
    <main className="text-whiteColor grid md:grid-cols-2 md:gap-0 gap-6">
      {/* constact Information */}
      <div className="w-[78%]">
        <div>
          <h3 className="text3 font-semibold">
            Let’s Build Something Incredible Together!
          </h3>
          <p className="text10">
            Contact us now and let our team of industry experts propel your
            business to new heights.
          </p>
        </div>
        <div>
          <p className="text7 mt-8">OUR OFFICE:</p>
          <p className="flex items-center gap-2 py-4">
            <span>
              <img src={IMAGES.PK} alt={IMAGES.PK} className="w-8" />
            </span>
            <span className="text7 font-semibold">Pakistan</span>
          </p>
          <p className="text10 py-2">
            B, 73 9th St S, Block N North Nazimabad Town, Karachi, Karachi City,
            Sindh
          </p>
          <p className="text10 py-4 flex items-center gap-4">
            <span>
              <img src={IMAGES.PHONE} alt={IMAGES.PHONE} className="w-8" />
            </span>
            <span>+92 3xxxxxxxxx</span>
          </p>
          <p className="text10 flex items-center gap-4">
            <span>
              <img src={IMAGES.MAIL} alt={IMAGES.MAIL} className="w-8" />
            </span>
            <span>info@geeksofkolachi.com</span>
          </p>
        </div>
      </div>
      {/* constact Form */}

      <div className="bg-darkgray2 p-8 rounded-lg">
        <h3 className="text3 font-bold">Get Started Today!</h3>
        <form className="flex items-center justify-center flex-col">
          <div className="grid xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 xl:gap-9 sm:gap-4 lg:gap-2 w-full ">
            <Inputfield
              type="text"
              Labelname={"Full Name*"}
              placeholder={"Enter your name"}
              labelstyle=""
              inputStyle="border border-lightgray2 bg-transparent mt-3  w-full p-2 rounded-md placeholder:text-placeHolder"
            />
            <Inputfield
              type="email"
              Labelname={"Email Address*"}
              placeholder={"Enter your email address"}
              inputStyle="border border-lightgray2 bg-transparent mt-3  w-full p-2 rounded-md placeholder:text-placeHolder"
            />
          </div>
          <div className="grid xl:grid-cols-2 lg:grid-cols-1 items-center sm:grid-cols-2 xl:gap-9 sm:gap-4 lg:gap-2 w-full mt-4 ">
            <Inputfield
              type="text"
              Labelname={"Phone Number*"}
              placeholder={"+92 "}
              labelstyle=""
              inputStyle="border border-lightgray2 bg-transparent mt-3 w-full p-2 rounded-md placeholder:text-placeHolder"
            />
            <div className="w-full flex flex-col ">
              <label>Interested in*</label>
              <select className="border border-lightgray2 bg-transparent h-auto xl:w-auto w-full p-2 mt-3 rounded-md placeholder:text-placeHolder text-placeHolder">
                <option value=" " selected={true} disabled >Select Service</option>
                <option value="1" className="text-lightgray2">
                 Computer
                </option>
                <option value="2" className="text-lightgray2">
                 Laptop
                </option>
                <option value="3" className="text-lightgray2">
                 LED Tv
                </option>
              </select>
            </div>
          </div>
          <textarea
            className="w-full py-6 px-2 rounded-md bg-transparent border border-bg-lightgray2 mt-3 "
            placeholder="Write yor message"
            minLength={100}
            maxLength={200}
          ></textarea>
        </form>
        <div className="flex items-start justify-start mt-4">
          <button className="text8 p-4 rounded-lg bg-lightgray1">
            Submit Form
          </button>
        </div>
      </div>
    </main>
  );
};

export default ContactInformation;
