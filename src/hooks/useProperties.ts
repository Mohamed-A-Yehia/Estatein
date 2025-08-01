import { useContext } from "react";
import { PropertiesContext } from "../context/PropertiesData";

export function useProperties() {
  const context = useContext(PropertiesContext);

  if (!context)
    throw new Error("useProperties Must Be Used Witin A PropertyProvider");

  return context;
}
