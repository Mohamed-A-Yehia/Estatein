import { FaHome, FaBuilding } from "react-icons/fa";
import { FaTableCellsRowUnlock } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";

function Info() {
  return (
    <div className="border-grey-10 grid grid-cols-2 gap-2.5 border-8 p-2.5 text-center lg:grid-cols-4 lg:gap-5 lg:p-5">
      <div className="bg-grey-10 border-grey-20 flex flex-col items-center rounded-md border-1 px-5 py-10">
        <FaHome className="text-primary-65 size-9" />
        <p className="mt-5 text-white">Find Your Drem Home</p>
      </div>
      <div className="bg-grey-10 text-grey-60 border-grey-20 flex flex-col items-center rounded-md border-1 px-5 py-10">
        <FaTableCellsRowUnlock className="text-primary-65 size-9" />
        <p className="mt-5 text-white">Unlock Property Value</p>
      </div>
      <div className="bg-grey-10 text-grey-60 border-grey-20 flex flex-col items-center rounded-md border-1 px-5 py-10">
        <FaBuilding className="text-primary-65 size-9" />
        <p className="mt-5 text-white">Effortless Property Management</p>
      </div>
      <div className="bg-grey-10 text-grey-60 border-grey-20 flex flex-col items-center rounded-md border-1 px-5 py-10">
        <FiSun className="text-primary-65 size-9" />
        <p className="mt-5 text-white">
          Smart Investments, Informed Descisions
        </p>
      </div>
    </div>
  );
}

export default Info;
