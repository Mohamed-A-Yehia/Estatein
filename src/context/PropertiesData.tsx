import axios from "axios";
import type { ReactNode } from "react";
import { createContext, useEffect, useState } from "react";

interface Property {
  id: string;
  title: string;
  tag: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: string;
}

interface PropertiesContextType {
  data: Property[];
  isLoading: boolean;
}

const PropertiesContext = createContext<PropertiesContextType | null>(null);

function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      axios
        .get("/data/properties.json")
        .then((response) => {
          setData(response.data.properties);
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
    <PropertiesContext.Provider value={{ data, isLoading }}>
      {children}
    </PropertiesContext.Provider>
  );
}

export { DataProvider, PropertiesContext };
