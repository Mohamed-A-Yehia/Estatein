import { useContext } from "react";
import { TestimonialsContext } from "../context/TestimonialsData";

export function useTestimonials() {
  const context = useContext(TestimonialsContext);

  if (!context)
    throw new Error(
      "useTestimonials Must Be Used Witin A TestimonialsProvider",
    );

  return context;
}
