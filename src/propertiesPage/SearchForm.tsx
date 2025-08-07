import { BsFillBoxFill } from "react-icons/bs";
import { FaRegCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiBanknotes } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";
import { MdOutlineHomeWork } from "react-icons/md";
import { RiArrowDownWideFill } from "react-icons/ri";

function SearchForm() {
  return (
    <form className="mt-[-50px]">
      <div className="flex justify-center">
        <div className="bg-grey-15 relative mb-2.5 w-[100%] rounded-lg p-4 md:w-[80%] lg:mb-0">
          <input
            className="border-grey-20 ring-grey-15 bg-grey-10 outline-grey-30 w-full rounded-lg border px-6 py-5 ring-4 focus:outline-1"
            type="search"
            name="search-property"
            id="search-property"
            placeholder="Search For A Property"
            aria-label="Search For Property"
          />
          <button
            type="submit"
            aria-label="Submit The Form Search"
            id="submit-search"
            className="bg-primary-60 right-[] absolute top-6 right-6 flex items-center gap-2 rounded-lg px-4 py-2.5"
          >
            <LuSearch size={30} />
            <span className="hidden lg:block">Find Property</span>
          </button>
        </div>
      </div>

      <div className="bg-grey-15 center grid grid-cols-1 gap-5 rounded-md p-5 text-[15px] lg:grid-cols-5">
        <div className="relative flex items-center justify-center">
          <select
            defaultValue="all"
            name="select-location"
            id="select-location"
            aria-label="select location"
            className="text-grey-60 bg-grey-10 outline-grey-60 min-w-full appearance-none rounded-lg border-1 py-3 pl-8 focus:outline"
          >
            <option value="all">Location</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
          </select>
          <FaLocationDot className="text-grey-60 absolute left-2 size-5" />
          <RiArrowDownWideFill className="bg-grey-15 absolute right-2.5 size-7 rounded-full p-0.5" />
        </div>

        <div className="relative flex items-center justify-center">
          <select
            defaultValue="all"
            name="select-Property-Type"
            id="select-Property-Type"
            aria-label="select Property Type"
            className="text-grey-60 bg-grey-10 outline-grey-60 min-w-full appearance-none rounded-lg border-1 py-3 pl-8 focus:outline"
          >
            <option value="all">Property Type</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
          </select>
          <MdOutlineHomeWork className="text-grey-60 absolute left-2 size-5" />
          <RiArrowDownWideFill className="bg-grey-15 absolute right-2.5 size-7 rounded-full p-0.5" />
        </div>

        <div className="relative flex items-center justify-center">
          <select
            defaultValue="all"
            name="select-Property-Type"
            id="select-pricing-range"
            aria-label="select Property Type"
            className="text-grey-60 bg-grey-10 outline-grey-60 min-w-full appearance-none rounded-lg border-1 py-3 pl-8 focus:outline"
          >
            <option value="all">Pricing Range</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
          </select>
          <HiBanknotes className="text-grey-60 absolute left-2 size-5" />
          <RiArrowDownWideFill className="bg-grey-15 absolute right-2.5 size-7 rounded-full p-0.5" />
        </div>

        <div className="relative flex items-center justify-center">
          <select
            defaultValue="all"
            name="select-Property-Type"
            id="select-Property-Type"
            aria-label="select Property Type"
            className="text-grey-60 bg-grey-10 outline-grey-60 min-w-full appearance-none rounded-lg border-1 py-3 pl-8 focus:outline"
          >
            <option value="all">Property Size</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
          </select>
          <BsFillBoxFill className="text-grey-60 absolute left-2 size-5" />
          <RiArrowDownWideFill className="bg-grey-15 absolute right-2.5 size-7 rounded-full p-0.5" />
        </div>

        <div className="relative flex items-center justify-center">
          <select
            defaultValue="all"
            name="select-Property-Type"
            id="select-Property-Type"
            aria-label="select Property Type"
            className="text-grey-60 bg-grey-10 outline-grey-60 min-w-full appearance-none rounded-lg border-1 py-3 pl-8 focus:outline"
          >
            <option value="all">Build Year</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
          </select>
          <RiArrowDownWideFill className="bg-grey-15 absolute right-2.5 size-7 rounded-full p-0.5" />
          <FaRegCalendar className="text-grey-60 absolute left-2 size-5" />
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
