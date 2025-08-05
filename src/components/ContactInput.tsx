import { IoIosSend } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

type props = {
  emailIcon?: boolean;
  rounded?: string | number;
  placeholder: string;
};

function ContactInput({
  emailIcon = true,
  rounded = "lg",
  placeholder,
}: props) {
  return (
    <div>
      <div className="relative w-fit text-white">
        <input
          type="email"
          name="Email"
          placeholder={placeholder}
          id="email"
          autoComplete="email"
          className={`border-grey-15 ${typeof rounded === "number" ? `rounded-[${rounded}px]` : "rounded-lg"} focus:outline-grey-20 mt-5 w-60 border py-2.5 ${emailIcon ? "pl-11" : "pl-5"} focus:bg-transparent focus:outline sm:w-80`}
        />
        {emailIcon && (
          <MdOutlineEmail
            size={30}
            className="text-grey-60 absolute top-7 left-2.5"
          />
        )}
        <button
          className="absolute top-7 right-2.5 cursor-pointer text-white"
          aria-label="send email"
        >
          <IoIosSend size={30} />
        </button>
      </div>
    </div>
  );
}

export default ContactInput;
