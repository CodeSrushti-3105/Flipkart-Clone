function SliderCard({ image, title, price }) {
  return (
    <div className="slider-card">
      <img src={image} alt={title} />
      <p className="slider-title">{title}</p>
      <p className="slider-price">{price}</p>
    </div>
  );
}

export default SliderCard;
