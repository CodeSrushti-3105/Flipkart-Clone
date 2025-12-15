import "./MultiDealSection.css";
import multiDealData from "../../data/multiDealData";
import DealBlock from "./DealBlock";

function MultiDealSection() {
  return (
    <div className="multi-deal-section">
      {multiDealData.map((block, index) => (
        <DealBlock
          key={index}
          title={block.title}
          items={block.items}
        />
      ))}
    </div>
  );
}

export default MultiDealSection;
