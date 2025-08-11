import { LuSearch } from "react-icons/lu";

function SearchForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form className="mt-[-50px]" onSubmit={() => handleSubmit}>
      <div className="flex justify-center">
        <div className="bg-grey-10 relative mb-2.5 w-[100%] rounded-lg p-4 md:w-[80%] lg:mb-0">
          <input
            className="border-grey-15 bg-grey-10 outline-grey-30 w-full rounded-lg border px-6 py-5 focus:outline-1"
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
    </form>
  );
}

export default SearchForm;
