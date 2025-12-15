function FashionCard({ image, title, offer }) {
  return (
    <div className="fashion-card">
      <img src={image} alt={title} />
      <p className="fashion-title">{title}</p>
      <p className="fashion-offer">{offer}</p>
    </div>
  );
}

export default FashionCard;
