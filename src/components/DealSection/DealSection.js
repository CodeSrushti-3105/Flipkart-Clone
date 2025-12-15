import { useRef } from "react";
import "./DealSection.css";
import dealsData from "../../data/dealsData";
import DealCard from "./DealCard";
import promoBanner from "../../assets/promo/promo-banner.webp";

function DealSection() {
  const dealsRef = useRef(null);

  const scrollLeft = () => {
    dealsRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    dealsRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="deals-section">

      {/* LEFT DEALS */}
      <div className="deals-left">
        <div className="section-header">
          <h2 className="section-title">Top Deals</h2>
        </div>

        <button className="deal-arrow left" onClick={scrollLeft}>‹</button>

        <div className="deals-row" ref={dealsRef}>
          {dealsData.map((item, index) => (
            <DealCard
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>

        <button className="deal-arrow right" onClick={scrollRight}>›</button>
      </div>

      {/* RIGHT PROMO BANNER */}
      <div className="deals-right">
        <img src={promoBanner} alt="Promo Banner" />
      </div>

    </div>
  );
}

export default DealSection;
