import type { ReactNode } from "react";
import { createContext, useEffect, useState } from "react";
import type { Property } from "../types/property";

interface PropertiesContextType {
  data: Property[];
  isLoading: boolean;
}

const PropertiesContext = createContext<PropertiesContextType | null>(null);

function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await fetch("/data/properties.json");
        const data = await response.json();
        if (isMounted) setData(data.properties);
      } catch (error) {
        if (isMounted) {
          console.error(`ERROR: ${error}`);
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
    <PropertiesContext.Provider value={{ data, isLoading }}>
      {children}
    </PropertiesContext.Provider>
  );
}

export { DataProvider, PropertiesContext };
