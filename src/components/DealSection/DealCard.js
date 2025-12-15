function DealCard({ image, title, price }) {
  return (
    <div className="deal-card">
      <img src={image} alt={title} />
      <p className="deal-title">{title}</p>
      <p className="deal-price">{price}</p>
    </div>
  );
}

export default DealCard;
