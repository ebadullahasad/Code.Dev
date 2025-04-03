import Inputfield from "../../../Components/Inputfield";
import Button from "../../../Components/Button";
import CheckBox from "../../../Components/CheckBox";
import { checkBox } from "../../../Utils/DummyData";

const Form = () => {
  return (
    <div className="md:w-[55%] rounded-xl w-full p-5 md:mt-0 mt-4 bg-secondaryColor">
      <p className="text-white font-bold font-poppins md:text4 sm:text1 text2">Reach Us</p>
      {/* InputFields */}
      <div className="flex md:flex-row flex-col gap-5 mt-5">
        <Inputfield
          type="text"
          Labelname="First Name"
          labelstyle="lg:text10 md:text11 sm:text7 text8 text-white"
          name="firstname"
          placeholder="Enter your name"
          divstyle="w-full"
          innerDiv="w-full mt-2"
          inputStyle="text-placeHolder 
                     w-full py-3 px-5 rounded-xl bg-transparent 
                     border-2 border-lightgray7"
        />
        <Inputfield
          Labelname="Last Name"
          labelstyle="lg:text10 md:text11 sm:text7 text8 text-white"
          name="lastname"
          type="name"
          placeholder="Enter your Last name"
          divstyle="w-full"
          innerDiv="w-full mt-2"
          inputStyle=" text-placeHolder 
                     w-full py-3 px-5 rounded-xl bg-transparent 
                     border-2 border-lightgray7"
        />
      </div>
      <div className="flex md:flex-row flex-col gap-5 mt-5">
        <Inputfield
          type="number"
          Labelname="Phone Number"
          labelstyle="lg:text10 md:text11 sm:text7 text8  text-white"
          name="Phonenumber"
          placeholder="+92"
          divstyle="w-full"
          innerDiv="w-full mt-2"
          inputStyle="text-placeHolder 
                     w-full py-3 px-5 rounded-xl bg-transparent 
                     border-2 border-lightgray7"
          //  inputStyle="w-full border-solid border placeholder-primaryColor  text9 px-2 py-2 lg:py-3 md:py-2 sm:py-3"
        />

        <Inputfield
          Labelname="Email Address"
          labelstyle="lg:text10 md:text11 sm:text7 text8  text-white"
          name="email"
          type="email"
          placeholder="Enter your Email Address"
          divstyle="w-full"
          innerDiv="w-full mt-2"
          inputStyle=" text-placeHolder 
                     w-full py-3 px-5 rounded-xl bg-transparent 
                     border-2 border-lightgray7"
        />
      </div>
      {/* CheckBoxWork */}
      <div className="mt-5">
        <p className="text-white">Why are you contacting us?</p>
        <div className="flex lg:flex-row flex-col gap-5 mt-3 mb-5">
          {checkBox &&
            checkBox.map((item, ind) => (
              <div className="flex gap-2" key={ind}>
                <CheckBox />
                <p className="text-placeHolder lg:text12 text9">{item}</p>
              </div>
            ))}
        </div>
      </div>

      {/* TextArea */}
      <textarea
        name=""
        id=""
        className="text-placeHolder px-2 py-2 bg-transparent md:mt-5 border-2 border-lightgray7 rounded-xl w-full h-[140px]"
      >
        Write a message.
      </textarea>
      {/* SubmitFormButon */}
      <Button
        btnname="Submit Form"
        divstyle="bg-lightgray1 rounded-lg w-[100px] gradient h-[30px] mt-5 md:w-[130px] md:h-[40px] lg:my-9 md:my- sm:my-2"
        btnStyle="text-white lg:text9 md:text10 sm:text11"
      />
    </div>
  );
};

export default Form;
