import React from "react";
import Button from "../../../../Components/Button";
import Inputfield from "../../../../Components/Inputfield";
import { IMAGES } from "../../../../Utils/images";
// import { useFilePicker } from "use-file-picker";

const RightSection = () => {
  // const { openFilePicker, filesContent, loading } = useFilePicker({
  //   accept: ".txt",
  // });
  return (
    //  RightDiv
    <div className="md:w-[55%] w-full bg-primaryColor py-5">
      <div className="md:w-[80%] w-[90%] mx-auto">
        <p className="font-Barlow text3 text-white font-bold">Reach Us</p>
        <div className="flex gap-5  mx-auto">
          <Inputfield
            divstyle="md:mt-7 mt-4 w-[50%] "
            Labelname="First Name*"
            labelstyle="text10 text-lableColor"
            innerDiv="text11 border-[1px] rounded-lg border-lableColor w-full text-white mt-2"
            inputStyle="w-full px-5 py-3 bg-transparent "
            type="email"
            placeholder="Enter First Name"
            name="email"
          />
          <Inputfield
            divstyle="md:mt-7 mt-4 w-[50%] "
            Labelname="Last Name*"
            labelstyle="text10 text-lableColor"
            innerDiv="text11 border-[1px] rounded-lg border-lableColor w-full text-white mt-2"
            inputStyle="w-full px-5 py-3 bg-transparent "
            type="email"
            placeholder="Enter First Name"
            name="email"
          />
        </div>

        <Inputfield
          divstyle="md:mt-5 mt-4 "
          Labelname="Email Address*"
          labelstyle="text10 text-lableColor"
          innerDiv="text11 border-[1px] rounded-lg border-lableColor w-full text-white mt-2"
          inputStyle="w-full px-5 py-3 bg-transparent "
          type="email"
          placeholder="Enter First Name"
          name="email"
        />
        <Inputfield
          divstyle="md:mt-5 mt-4 "
          Labelname="Phone Number"
          labelstyle="text10 text-lableColor"
          innerDiv="text11 border-[1px] rounded-lg border-lableColor w-full text-white mt-2"
          inputStyle="w-full px-5 py-3 bg-transparent "
          type="email"
          placeholder="Enter First Name"
          name="email"
        />
        <Inputfield
          divstyle="md:mt-5 mt-4 "
          Labelname="Position"
          labelstyle="text10 text-lableColor"
          innerDiv="text11 border-[1px] rounded-lg border-lableColor w-full text-white mt-2"
          inputStyle="w-full px-5 py-3 bg-transparent "
          type="email"
          placeholder="Enter First Name"
          name="email"
        />
        <Inputfield
          divstyle="md:mt-5 mt-4 "
          Labelname="Experience"
          labelstyle="text10 text-lableColor"
          innerDiv="text11 border-[1px] rounded-lg border-lableColor w-full text-white mt-2"
          inputStyle="w-full px-5 py-3 bg-transparent "
          type="email"
          placeholder="Enter First Name"
          name="email"
        />
        <div className="mt-5 flex flex-col justify-center items-center outline-dashed w-full h-[140px]">
          <img
            // onClick={() => openFilePicker()}
            src={IMAGES.UPLOAD_ICON}
            className="w-[30px] h-[30px] cursor-pointer animate-bounce"
            alt="upload_icon"
          />

          <p className="md:text10 text11 text-placeHolder">
            Upload File or drag and drop here.
          </p>
        </div>

        <Button
          btnname="Submit Form"
          btnStyle="text8"
          divstyle="bg-lightgray1 gradient py-3 px-12 mt-10"
        />
      </div>
    </div>
  );
};

export default RightSection;
