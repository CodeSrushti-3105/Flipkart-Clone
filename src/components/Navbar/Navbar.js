import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        
        {/* LEFT */}
        <div className="navbar-left">
          <div className="logo">
            Flipkart
            <span className="plus">Explore Plus ✨</span>
          </div>
        </div>

        {/* CENTER */}
        <div className="navbar-center">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
          />
        </div>

        {/* RIGHT */}
        <div className="navbar-right">
          <div className="nav-item">👤 Login ▾</div>
          <div className="nav-item">🛒 Cart</div>
          <div className="nav-item">🏪 Become a Seller</div>
          <div className="nav-item">⋮</div>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
