import { useContext } from "react";
import { FaqsContext } from "../context/FaqsData";

export function useFaqs() {
  const context = useContext(FaqsContext);

  if (!context) throw new Error("useFaqs Must Be Used Witin A FaqsProvider");

  return context;
}
