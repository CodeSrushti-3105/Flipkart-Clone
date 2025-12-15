import "./OfferSection.css";
import offersData from "../../data/offersData";

function OfferSection() {
  return (
    <div className="section-box">
      <div className="section-container">
        <div className="offers-grid">
          {offersData.map((item, index) => (
            <div className="offer-card" key={index}>
              <img src={item.image} alt="offer" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OfferSection;
