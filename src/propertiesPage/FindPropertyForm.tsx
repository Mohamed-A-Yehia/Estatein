import { MdEmail, MdPhone } from "react-icons/md";
import { RiArrowDownWideFill } from "react-icons/ri";
import LinkButton from "../components/LinkButton";

function FindPropertyForm() {
  return (
    <form className="border-grey-15 placeholder:bg-grey-60 grid gap-5 rounded-lg border p-5 lg:grid-cols-4 lg:grid-rows-5 lg:items-center lg:p-10">
      <div className="flex flex-col gap-2.5">
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          autoComplete="name"
          name="first-name"
          id="first-name"
          placeholder="Enter First Name"
          className="bg-grey-10 border-grey-15 focus:outline-grey-30 rounded-lg border px-2.5 py-2.5 focus:outline"
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          autoComplete="family-name"
          name="last-name"
          id="last-name"
          placeholder="Enter Last Name"
          className="bg-grey-10 border-grey-15 focus:outline-grey-30 rounded-lg border px-2.5 py-2.5 focus:outline"
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          autoComplete="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          className="bg-grey-10 border-grey-15 focus:outline-grey-30 rounded-lg border px-2.5 py-2.5 focus:outline"
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <label htmlFor="phone-number">Phone</label>
        <input
          type="tel"
          name="phone-number"
          id="phone-number"
          placeholder="Enter Phone Number"
          className="bg-grey-10 border-grey-15 focus:outline-grey-30 rounded-lg border px-2.5 py-2.5 focus:outline"
        />
      </div>

      <div className="relative flex flex-col gap-2.5">
        <label htmlFor="pref-location">Preferred Location</label>
        <select
          defaultValue="all"
          name="pref-location"
          id="pref-location"
          aria-label="select the preferred location"
          className="bg-grey-10 border-grey-15 focus:outline-grey-30 text-grey-60 appearance-none rounded-lg border px-2.5 py-2.5 focus:outline"
        >
          <option value="all">Select Location</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
        </select>
        <RiArrowDownWideFill className="bg-grey-15 absolute top-11 right-2.5 size-7 rounded-full p-0.5" />
      </div>

      <div className="relative flex flex-col gap-2.5">
        <label htmlFor="find-property-type">Property Type</label>
        <select
          defaultValue="all"
          name="find-property-type"
          id="find-property-type"
          aria-label="find property type"
          className="bg-grey-10 border-grey-15 focus:outline-grey-30 text-grey-60 appearance-none rounded-lg border px-2.5 py-2.5 focus:outline"
        >
          <option value="all">Select Property Type</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
        </select>
        <RiArrowDownWideFill className="bg-grey-15 absolute top-11 right-2.5 size-7 rounded-full p-0.5" />
      </div>

      <div className="relative flex flex-col gap-2.5">
        <label htmlFor="bathrooms-number">No. of Bathrooms</label>
        <select
          defaultValue="all"
          name="bathrooms number"
          id="bathrooms-number"
          aria-label="number of bathrooms"
          className="bg-grey-10 border-grey-15 focus:outline-grey-30 text-grey-60 appearance-none rounded-lg border px-2.5 py-2.5 focus:outline"
        >
          <option value="all">No. of Bathrooms</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
        </select>
        <RiArrowDownWideFill className="bg-grey-15 absolute top-11 right-2.5 size-7 rounded-full p-0.5" />
      </div>

      <div className="relative flex flex-col gap-2.5">
        <label htmlFor="bedrooms-number">No. of Bedrooms</label>
        <select
          defaultValue="all"
          name="bedrooms number"
          id="bedrooms-number"
          aria-label="Number of bedrooms"
          className="bg-grey-10 border-grey-15 focus:outline-grey-30 text-grey-60 appearance-none rounded-lg border px-2.5 py-2.5 focus:outline"
        >
          <option value="all">No. of Bathrooms</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
        </select>
        <RiArrowDownWideFill className="bg-grey-15 absolute top-11 right-2.5 size-7 rounded-full p-0.5" />
      </div>

      <div className="relative flex flex-col gap-2.5 lg:col-span-2 lg:row-start-3">
        <label htmlFor="budget">Budget</label>
        <select
          defaultValue="all"
          name="budget"
          id="budget"
          aria-label="your budget"
          className="bg-grey-10 border-grey-15 focus:outline-grey-30 text-grey-60 appearance-none rounded-lg border px-2.5 py-2.5 focus:outline"
        >
          <option value="all">Select Budget</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
        </select>
        <RiArrowDownWideFill className="bg-grey-15 absolute top-11 right-2.5 size-7 rounded-full p-0.5" />
      </div>

      <div className="relative flex flex-col gap-2.5 lg:col-span-2 lg:row-start-3">
        <fieldset className="flex flex-col gap-2.5 lg:flex-row">
          <legend className="mb-2.5">Preferred Contact Method</legend>
          <div className="bg-grey-10 border-grey-15 text-grey-60 flex items-center justify-between rounded-lg border p-2.5 lg:min-w-1/2">
            <MdPhone />
            <label htmlFor="contact-phone" className="ml-2.5 w-full">
              Phone
            </label>
            <input type="radio" name="contact" id="contact-phone" />
          </div>

          <div className="bg-grey-10 border-grey-15 text-grey-60 flex items-center justify-between rounded-lg border p-2.5 lg:min-w-1/2">
            <MdEmail />
            <label htmlFor="contact-email" className="ml-2.5 w-full">
              Email
            </label>
            <input
              type="radio"
              name="contact"
              id="contact-email"
              className="focus:ring-primary-60"
            />
          </div>
        </fieldset>
      </div>

      <div className="flex flex-col gap-2.5 lg:col-span-4">
        <label htmlFor="message">Message</label>
        <textarea
          name="messagelast-name"
          id="message"
          aria-label="write your message here"
          placeholder="Enter Your Message here.."
          className="bg-grey-10 border-grey-15 focus:outline-grey-30 h-30 rounded-lg border px-4 py-2.5 text-justify focus:outline"
        />
      </div>

      <div className="text-grey-60 col-start-1 flex gap-2.5 text-sm lg:col-span-2">
        <input
          required
          type="checkbox"
          aria-label="confirm that you agree with Terms and Privacy Policy"
          name="terms-privacy"
          id="terms-privacy"
          className=""
        />
        <label htmlFor="terms-privacy">
          I agree with <span className="underline">Terms of Use</span> and{" "}
          <span className="underline">Privacy Policy</span>
        </label>
      </div>

      <div className="w-full lg:col-end-5">
        <LinkButton buttonType="primary" to="">
          Send Your Message
        </LinkButton>
      </div>
    </form>
  );
}

export default FindPropertyForm;
