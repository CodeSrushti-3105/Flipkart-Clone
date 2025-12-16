import { useRef } from "react";
import "./HorizontalSlider.css";
import SliderCard from "./SliderCard";
import furnitureDeals from "../../data/furnitureDeals";

function HorizontalSlider() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -400,
      behavior: "smooth"
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 400,
      behavior: "smooth"
    });
  };

  return (
    <div className="slider-section">
      <div className="slider-header">
        <h2 className="slider-heading">Furniture Deals</h2>
      </div>

      {/* Arrows */}
      <button className="slider-arrow left" onClick={scrollLeft}>
        ‹
      </button>
      <button className="slider-arrow right" onClick={scrollRight}>
        ›
      </button>

      {/* Mapping like FashionSection */}
      <div className="slider-row" ref={sliderRef}>
        {furnitureDeals.map((item, index) => (
          <SliderCard
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default HorizontalSlider;
