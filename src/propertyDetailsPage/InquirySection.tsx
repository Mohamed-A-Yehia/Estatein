import SectionIntro from "../components/SectionIntro";
import type { Property } from "../types/property";

interface InquirySectionProps {
  selectedProperty: Property;
}

function InquirySection({ selectedProperty }: InquirySectionProps) {
  return (
    <section className="container m-auto flex flex-col gap-10 px-4 py-8 text-white md:py-16 lg:flex-row xl:px-16">
      <SectionIntro
        title={`Inquire About ${selectedProperty.title}`}
        description="Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have."
      />

      <form className="border-grey-15 grid gap-7 rounded-lg border p-5 lg:w-full">
        <div className="flex flex-col gap-2.5">
          <label htmlFor="First-name">First Name</label>
          <input
            type="text"
            placeholder="Enter First Name"
            id="first-name"
            aria-label="enter your first name"
            className="placeholder:text-grey-60 border-grey-15 bg-grey-10 rounded-lg border p-3"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            id="last-name"
            aria-label="enter your last name"
            className="placeholder:text-grey-60 border-grey-15 bg-grey-10 rounded-lg border p-3"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            id="email"
            aria-label="enter your email"
            className="placeholder:text-grey-60 border-grey-15 bg-grey-10 rounded-lg border p-3"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <label htmlFor="property-title">Property</label>
          <input
            readOnly
            disabled
            value={`${selectedProperty.title} ${selectedProperty.type}`}
            type="text"
            placeholder="Property Title"
            id="property-title"
            aria-label="property title"
            className="placeholder:text-grey-60 border-grey-15 bg-grey-10 rounded-lg border p-3"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Enter Your Message Here.."
            id="message"
            aria-label="enter the message"
            className="placeholder:text-grey-60 border-grey-15 bg-grey-10 h-30 rounded-lg border p-3"
          />
        </div>
        <div className="text-grey-60 flex gap-2.5 text-sm">
          <input
            required
            type="checkbox"
            id="check-terms"
            aria-label="check terms"
            className="placeholder:text-grey-60 border-grey-15 bg-grey-10 rounded-lg border p-3"
          />
          <label htmlFor="check-terms">
            I agree with Terms of Use and Privacy Policy
          </label>
        </div>
      </form>
    </section>
  );
}

export default InquirySection;
