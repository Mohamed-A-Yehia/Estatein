import type { Dispatch, SetStateAction } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface props {
  setIndex: Dispatch<SetStateAction<number>>;
  start: number;
  maxIndex: number;
  index: number;
}

function PrevNextButtons({ setIndex, start, index, maxIndex }: props) {
  return (
    <>
      <button
        className="bg-grey-15 cursor-pointer rounded-full p-2.5"
        onClick={() =>
          setIndex((prevIndex) => Math.min(prevIndex - 1, maxIndex))
        }
        disabled={start === 0}
      >
        <FaArrowLeft />
      </button>
      <p>
        {index + 1} of {maxIndex + 1}
      </p>
      <button
        className="bg-grey-15 cursor-pointer rounded-full p-2.5"
        onClick={() =>
          setIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex))
        }
        disabled={index === maxIndex}
      >
        <FaArrowRight />
      </button>
    </>
  );
}

export default PrevNextButtons;
