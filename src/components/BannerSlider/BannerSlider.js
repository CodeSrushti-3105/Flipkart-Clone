import { useState } from "react";
import "./BannerSlider.css";
import bannersData from "../../data/bannersData";

function BannerSlider() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? bannersData.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === bannersData.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="section-box">
      <div className="section-container">
        <div className="banner-slider">
          <button className="arrow left" onClick={prevSlide}>
            ‹
          </button>

          <img
            src={bannersData[index].image}
            alt="banner"
            className="banner-image"
          />

          <button className="arrow right" onClick={nextSlide}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

export default BannerSlider;
