import "./Categories.css";
import categoriesData from "../../data/categoriesData";

function Categories() {
  return (
    <div className="section-box">
      <div className="section-container">
        <div className="categories-container">
          {categoriesData.map((item, index) => (
            <div className="category-item" key={index}>
              <div className="category-icon">{item.icon}</div>
              <div className="category-text">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;