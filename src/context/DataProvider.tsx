import axios from "axios";
import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";

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

interface DataContextType {
  data: Property[];
  isLoading: boolean;
}

const DataContext = createContext<DataContextType | null>(null);

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
        .catch((error) => console.log(error));
    } catch (error) {
      throw new Error(`ERROR: ${error}`);
    }
  }, []);

  return (
    <DataContext.Provider value={{ data, isLoading }}>
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { DataProvider, useData };
