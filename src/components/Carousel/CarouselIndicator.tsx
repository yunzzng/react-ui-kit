import { FC, useMemo } from "react";
import useCarouselContext from "./hooks/useCarouselContext";

interface CarouselIndicatorProps {
  className?: string;
  activeColor?: string;
  defaultColor?: string;
}

const CarouselIndicator: FC<CarouselIndicatorProps> = ({ className, activeColor, defaultColor }) => {
  const { carouselIndex, setCarouselIndex, itemLength } = useCarouselContext();

  const indexes = useMemo(() => Array.from({ length: itemLength }, (_, index) => index), [itemLength]);

  const carouselIndicatorCls = useMemo(() => {
    return className ? className : "";
  }, [className]);

  return (
    <div className={carouselIndicatorCls}>
      {indexes.map((index) => (
        <button
          key={index}
          className={`${index === carouselIndex ? "active" : ""} ${className || ""}`.trim()}
          style={{ backgroundColor: index === carouselIndex ? activeColor : defaultColor }}
          onClick={() => setCarouselIndex(index)}
        />
      ))}
    </div>
  );
};

export default CarouselIndicator;