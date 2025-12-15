function DealItem({ image, name, offer }) {
  return (
    <div className="deal-item">
      <img src={image} alt={name} />
      <p className="deal-name">{name}</p>
      <p className="deal-offer">{offer}</p>
    </div>
  );
}

export default DealItem;
