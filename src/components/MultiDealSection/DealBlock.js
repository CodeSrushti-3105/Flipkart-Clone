import DealItem from "./DealItem";

function DealBlock({ title, items }) {
  return (
    <div className="deal-block">
      <div className="deal-block-header">
        <h3>{title}</h3>
        <span className="arrow">›</span>
      </div>

      <div className="deal-grid">
        {items.map((item, index) => (
          <DealItem
            key={index}
            image={item.image}
            name={item.name}
            offer={item.offer}
          />
        ))}
      </div>
    </div>
  );
}

export default DealBlock;
