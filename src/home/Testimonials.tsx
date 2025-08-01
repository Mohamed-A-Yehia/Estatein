import PrevNextButtons from "../components/PrevNextButtons";
import useDataSize from "../hooks/useDataSize";
import { FaStar } from "react-icons/fa";

type Testimonials = {
  name: string;
  location: string;
  rating: number;
  testimonial: string;
};

interface TestimonialsProps {
  testimonials: Testimonials[];
}

function Testimonials({ testimonials }: TestimonialsProps) {
  const { index, maxIndex, start, visibleItems, setIndex } =
    useDataSize<Testimonials>(testimonials);

  return (
    <div className="text-white">
      <div className="flex min-h-80 gap-4 transition-all duration-300">
        {visibleItems.map((testimonial) => (
          <div
            key={testimonial.name}
            className="border-grey-20 flex w-full flex-col justify-between rounded-md border-1 p-6 lg:w-1/3"
          >
            <div className="flex gap-2.5">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <FaStar
                  key={i}
                  className="text-gold bg-gold-tr size-9 rounded-full p-1.5"
                />
              ))}
            </div>

            <p>{testimonial.testimonial}</p>
            <div>
              <p>{testimonial.name}</p>
              <p className="text-grey-60">{testimonial.location}</p>
            </div>
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

export default Testimonials;
