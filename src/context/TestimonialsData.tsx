import axios from "axios";
import { createContext, useEffect, useState, type ReactNode } from "react";

interface Testimonials {
  name: string;
  location: string;
  rating: number;
  testimonial: string;
}

interface TestimonialsContextType {
  data: Testimonials[];
  isLoading: boolean;
}

const TestimonialsContext = createContext<TestimonialsContextType | null>(null);

function TestimonialsData({ children }: { children: ReactNode }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      axios
        .get("/data/testimonial.json")
        .then((response) => {
          setData(response.data.testimonials);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(`ERROR: ${error}`);
          setIsLoading(false);
        });
    } catch (error) {
      throw new Error(`ERROR: ${error}`);
    }
  }, []);

  return (
    <TestimonialsContext.Provider value={{ data, isLoading }}>
      {children}
    </TestimonialsContext.Provider>
  );
}

export { TestimonialsData, TestimonialsContext };
