import { createContext, useEffect, useState, type ReactNode } from "react";

interface Faqs {
  question: string;
  answer: string;
}

interface FaqsContextType {
  data: Faqs[];
  isLoading: boolean;
  error: string | null;
}

const FaqsContext = createContext<FaqsContextType | null>(null);

function FaqsProvider({ children }: { children: ReactNode }) {
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

  return (
    <FaqsContext.Provider value={{ isLoading, data, error }}>
      {children}
    </FaqsContext.Provider>
  );
}

export { FaqsProvider, FaqsContext };
