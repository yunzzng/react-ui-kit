import { useContext } from "react";
import { CarouselContext } from "..";

const useCarouselContext = () => {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarouselContext must be used within a CarouselProvider");
  }

  return context;
};

export default useCarouselContext;