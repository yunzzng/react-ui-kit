import { FC, useMemo } from "react";
import useCarouselContext from "./hooks/useCarouselContext";

interface CarouselIndicatorProps {
  className?: string;
}

const CarouselIndicator: FC<CarouselIndicatorProps> = ({ className }) => {
  const { carouselIndex, setCarouselIndex, itemLength } = useCarouselContext();

  const indexes = useMemo(() => Array.from({ length: itemLength }, (_, index) => index), [itemLength]);

  return (
    <div className={className}>
      {indexes.map((index) => (
        <button
          key={index}
          className={index === carouselIndex ? "active" : ""}
          onClick={() => setCarouselIndex(index)}
        />
      ))}
    </div>
  );
};

export default CarouselIndicator;