import "./FashionSection.css";
import fashionDealsData from "../../data/fashionDealsData";
import FashionCard from "./FashionCard";
import promoBanner from "../../assets/fashion/fashion-promo.webp";

function FashionSection() {
  return (
    <div className="fashion-section">
      {/* LEFT */}
      <div className="fashion-left">
        <div className="fashion-header">
          <h2>Fashion’s Top Deals</h2>
          <span className="arrow-btn">›</span>
        </div>

        <div className="fashion-grid">
          {fashionDealsData.map((item, index) => (
            <FashionCard
              key={index}
              image={item.image}
              title={item.title}
              offer={item.offer}
            />
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="fashion-right">
        <img src={promoBanner} alt="Top Selling Smartphones" />
      </div>
    </div>
  );
}

export default FashionSection;
