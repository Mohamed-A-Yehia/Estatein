import axios from "axios";
import { createContext, useEffect, useState, type ReactNode } from "react";

interface Testimonials {
  name: string;
  location: string;
  rating: number;
  testimonials: string;
}

interface TestimonialsContextType {
  data: Testimonials[];
  isLoading: boolean;
}

const TestimonialsContext = createContext<TestimonialsContextType | null>(null);

function TestimonialsData({ children }: { children: ReactNode }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState<boolean>(true);

  useEffect(() => {
    try {
      axios.get("/data/testimonial.json").then((response) => {
        setData(response.data.testimonials);
        setIsloading(false);
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
