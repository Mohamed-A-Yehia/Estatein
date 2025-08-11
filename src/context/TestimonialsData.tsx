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
  error: string | null;
}

const TestimonialsContext = createContext<TestimonialsContextType | null>(null);

function TestimonialsData({ children }: { children: ReactNode }) {
  const [data, setData] = useState<Testimonials[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await fetch("/data/testimonial.json");
        const data = await response.json();
        if (isMounted) setData(data.testimonials);
      } catch (err: unknown) {
        if (isMounted) {
          let errorMessage = "Failed to load Testimonials: Unknown error";
          if (err instanceof Error) {
            errorMessage = `Failed to load Testimonials: ${err.message}`;
          }
          setError(errorMessage);
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <TestimonialsContext.Provider value={{ data, isLoading, error }}>
      {children}
    </TestimonialsContext.Provider>
  );
}

export { TestimonialsData, TestimonialsContext };
