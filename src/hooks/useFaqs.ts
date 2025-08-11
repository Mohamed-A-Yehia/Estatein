import { useEffect, useState } from "react";

interface Faqs {
  question: string;
  answer: string;
}

export function useFaqs() {
  const [data, setData] = useState<Faqs[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await fetch("/data/faqs.json");
        const data = await response.json();
        if (isMounted) setData(data.faqs);
      } catch (err: unknown) {
        if (isMounted) {
          let errorMessage = "Failed to load FAQs: Unknown error";
          if (err instanceof Error) {
            errorMessage = `Failed to load FAQs: ${err.message}`;
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
