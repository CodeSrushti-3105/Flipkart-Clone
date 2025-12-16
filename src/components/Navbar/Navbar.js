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

          {/* LOGIN */}
          <div className="nav-item login-wrapper">
            👤 Login ▾

            <div className="login-dropdown">
              <div className="login-top">
                <span>New customer?</span>
                <span className="signup">Sign Up</span>
              </div>

              <div className="login-item">My Profile</div>
              <div className="login-item">Flipkart Plus Zone</div>
              <div className="login-item">Orders</div>
              <div className="login-item">Wishlist</div>
              <div className="login-item">Rewards</div>
              <div className="login-item">Gift Cards</div>
            </div>
          </div>

          <div className="nav-item">🛒 Cart</div>
          <div className="nav-item">🏪 Become a Seller</div>
          <div className="nav-item">⋮</div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
