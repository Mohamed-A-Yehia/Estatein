import axios from "axios";
import { createContext, useEffect, useState, type ReactNode } from "react";

interface Faqs {
  question: string;
  answer: string;
}

interface FaqsContextType {
  data: Faqs[];
  isLoading: boolean;
}

const FaqsContext = createContext<FaqsContextType | null>(null);

function FaqsProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(function () {
    try {
      axios
        .get("/data/faqs.json")
        .then((response) => {
          setData(response.data.faqs);
        })
        .catch((error) => {
          console.error(`ERROR: ${error}`);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      throw new Error(`ERROR: ${error}`);
    }
  }, []);

  return (
    <FaqsContext.Provider value={{ isLoading, data }}>
      {children}
    </FaqsContext.Provider>
  );
}

export { FaqsProvider, FaqsContext };
