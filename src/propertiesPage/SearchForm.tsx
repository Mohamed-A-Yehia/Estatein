import { BsFillBoxFill } from "react-icons/bs";
import { FaRegCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiBanknotes } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";
import { MdOutlineHomeWork } from "react-icons/md";
import { RiArrowDownWideFill } from "react-icons/ri";

function SearchForm() {
  return (
    <form>
      <div className="relative mb-5">
        <input
          className="border-grey-20 ring-grey-15 outline-grey-30 w-full rounded-lg border px-6 py-5 ring-4 focus:outline-1 md:w-3/4"
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
          className="bg-primary-60 absolute top-2 right-2 rounded-lg px-4 py-2.5"
        >
          <LuSearch size={30} />
        </button>
      </div>

      <div className="bg-grey-15 relative flex flex-col items-center justify-center gap-5 rounded-md p-5 text-[15px]">
        <div className="flex items-center justify-center">
          <select
            name="select-location"
            id="select-location"
            aria-label="select location"
            className="text-grey-60 bg-grey-10 foucs:outline-1 outline-grey-30 w-[325px] appearance-none rounded-lg border-1 py-3 pl-8"
          >
            <option selected disabled value="all">
              Location
            </option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
          </select>
          <FaLocationDot className="text-grey-60 absolute left-6 size-5" />
          <RiArrowDownWideFill className="bg-grey-15 absolute right-7.5 size-7 rounded-full p-0.5" />
        </div>

        <div className="flex items-center justify-center">
          <select
            name="select-Property-Type"
            id="select-Property-Type"
            aria-label="select Property Type"
            className="text-grey-60 bg-grey-10 foucs:outline-1 outline-grey-30 w-[325px] appearance-none rounded-lg border-1 py-3 pl-8"
          >
            <option disabled selected value="all">
              Property Type
            </option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
          </select>
          <MdOutlineHomeWork className="text-grey-60 absolute left-6 size-5" />
          <RiArrowDownWideFill className="bg-grey-15 absolute right-7.5 size-7 rounded-full p-0.5" />
        </div>

        <div className="flex items-center justify-center">
          <select
            name="select-Property-Type"
            id="select-Property-Type"
            aria-label="select Property Type"
            className="text-grey-60 bg-grey-10 foucs:outline-1 outline-grey-30 w-[325px] appearance-none rounded-lg border-1 py-3 pl-8"
          >
            <option disabled selected value="all">
              Pricing Range
            </option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
          </select>
          <HiBanknotes className="text-grey-60 absolute left-6 size-5" />
          <RiArrowDownWideFill className="bg-grey-15 absolute right-7.5 size-7 rounded-full p-0.5" />
        </div>

        <div className="flex items-center justify-center">
          <select
            name="select-Property-Type"
            id="select-Property-Type"
            aria-label="select Property Type"
            className="text-grey-60 bg-grey-10 foucs:outline-1 outline-grey-30 w-[325px] appearance-none rounded-lg border-1 py-3 pl-8"
          >
            <option disabled selected value="all">
              Property Size
            </option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
          </select>
          <BsFillBoxFill className="text-grey-60 absolute left-6 size-5" />
          <RiArrowDownWideFill className="bg-grey-15 absolute right-7.5 size-7 rounded-full p-0.5" />
        </div>

        <div className="flex items-center justify-center">
          <select
            name="select-Property-Type"
            id="select-Property-Type"
            aria-label="select Property Type"
            className="text-grey-60 bg-grey-10 foucs:outline-1 outline-grey-30 w-[325px] appearance-none rounded-lg border-1 py-3 pl-8"
          >
            <option disabled selected value="all">
              Build Year
            </option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
          </select>
          <RiArrowDownWideFill className="bg-grey-15 absolute right-7.5 size-7 rounded-full p-0.5" />
          <FaRegCalendar className="text-grey-60 absolute left-6 size-5" />
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
