import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface props {
  children: string;
  setIndex: (i: unknown) => number;
  start: number;
  maxIndex: number;
  index: number;
}

function PrevNextButtons({ setIndex, start, index, maxIndex }: props) {
  return (
    <>
      <button
        className="bg-grey-15 cursor-pointer rounded-full p-2.5"
        onClick={() => setIndex((i: number) => Math.max(i - 1, 0))}
        disabled={start === 0}
      >
        <FaArrowLeft />
      </button>
      <p>
        0{index} of 0{maxIndex}
      </p>
      <button
        className="bg-grey-15 cursor-pointer rounded-full p-2.5"
        onClick={() => setIndex((i: number) => Math.min(i + 1, maxIndex))}
        disabled={start === maxIndex}
      >
        <FaArrowRight />
      </button>
    </>
  );
}

export default PrevNextButtons;
