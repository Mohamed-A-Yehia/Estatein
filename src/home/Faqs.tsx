interface Faqs {
  question: string;
  answer: string;
}

type FaqsProps = {
  faq: Faqs[];
};

function Faqs({ faqs }: FaqsProps) {
  return <div></div>;
}

export default Faqs;
