import PrevNextButtons from "../components/PrevNextButtons";
import useDataSize from "../hooks/useDataSize";

interface Faqs {
  question: string;
  answer: string;
}

type FaqsProps = {
  faqs: Faqs[];
};

function Faqs({ faqs }: FaqsProps) {
  const { index, maxIndex, start, visibleItems, setIndex } =
    useDataSize<Faqs>(faqs);

  return (
    <div>
      <div className="flex gap-4 transition-all duration-300">
        {visibleItems.map((faq) => (
          <div
            key={faq.question}
            className="border-grey-20 flex w-full flex-col justify-between gap-3.5 rounded-md border-1 p-6 text-white md:gap-5 lg:w-1/3"
          >
            <p className="text-lg font-semibold">{faq.question}</p>
            <p className="text-grey-60 text-sm font-medium">{faq.answer}</p>
          </div>
        ))}
      </div>
      <PrevNextButtons
        maxIndex={maxIndex}
        setIndex={setIndex}
        start={start}
        index={index}
      />
    </div>
  );
}

export default Faqs;
