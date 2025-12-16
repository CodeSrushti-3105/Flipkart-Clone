import "./GadgetsSection.css";
import gadgetsDealsData from "../../data/gadgetsDealsData";
import GadgetCard from "./GadgetCard";
import promoBanner from "../../assets/gadgets/gadgets-promo.webp";

function GadgetsSection() {
  return (
    <div className="gadgets-section">

      {/* LEFT GRID */}
      <div className="gadgets-left">
        <div className="gadgets-header">
          <h2>Best Gadgets & Appliances</h2>
          <span className="gadgets-arrow">›</span>
        </div>

        <div className="gadgets-grid">
          {gadgetsDealsData.map((item, index) => (
            <GadgetCard
              key={index}
              image={item.image}
              title={item.title}
              offer={item.offer}
            />
          ))}
        </div>
      </div>

      {/* RIGHT PROMO (WIDER) */}
      <div className="gadgets-right">
        <img src={promoBanner} alt="Promo Banner" />
      </div>

    </div>
  );
}

export default GadgetsSection;
