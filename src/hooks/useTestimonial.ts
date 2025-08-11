import { useState, useEffect } from "react";

interface Testimonials {
  name: string;
  location: string;
  rating: number;
  testimonial: string;
}

export function useTestimonial() {
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

  return { data, isLoading, error };
}
