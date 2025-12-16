import "./BrandDirectory.css";
import brandDirectoryData from "../../data/brandDirectoryData";

function BrandDirectory() {
  return (
    <div className="brand-directory">
      <h3 className="brand-heading">Top Stories : Brand Directory</h3>

      {brandDirectoryData.map((section, index) => (
        <div className="brand-row" key={index}>
          <span className="brand-title">{section.title} :</span>
          <span className="brand-items">
            {section.items.join(" | ")}
          </span>
        </div>
      ))}
    </div>
  );
}

export default BrandDirectory;
