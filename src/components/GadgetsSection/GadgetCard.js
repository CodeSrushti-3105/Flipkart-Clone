function GadgetCard({ image, title, offer }) {
  return (
    <div className="gadget-card">
      <img src={image} alt={title} />
      <p className="gadget-title">{title}</p>
      <p className="gadget-offer">{offer}</p>
    </div>
  );
}

export default GadgetCard;
