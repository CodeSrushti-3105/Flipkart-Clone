import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* TOP FOOTER */}
      <div className="footer-top">
        <div className="footer-col">
          <h4>ABOUT</h4>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Flipkart Stories</p>
          <p>Press</p>
          <p>Corporate Information</p>
        </div>

        <div className="footer-col">
          <h4>GROUP COMPANIES</h4>
          <p>Myntra</p>
          <p>Cleartrip</p>
          <p>Shopsy</p>
        </div>

        <div className="footer-col">
          <h4>HELP</h4>
          <p>Payments</p>
          <p>Shipping</p>
          <p>Cancellation & Returns</p>
          <p>FAQ</p>
        </div>

        <div className="footer-col">
          <h4>CONSUMER POLICY</h4>
          <p>Cancellation & Returns</p>
          <p>Terms Of Use</p>
          <p>Security</p>
          <p>Privacy</p>
          <p>Sitemap</p>
          <p>Grievance Redressal</p>
          <p>EPR Compliance</p>
          <p>FSSAI Food Safety</p>
          <p>Connect App</p>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-col address">
          <h4>Mail Us:</h4>
          <p>
            Flipkart Internet Private Limited,<br />
            Buildings Alyssa, Begonia &<br />
            Clove Embassy Tech Village,<br />
            Outer Ring Road,<br />
            Devarabeesanahalli Village,<br />
            Bengaluru, 560103,<br />
            Karnataka, India
          </p>

          <h4 className="social-title">Social:</h4>
          <div className="social-icons">
            <span>f</span>
            <span>X</span>
            <span>▶</span>
            <span>◎</span>
          </div>
        </div>

        <div className="footer-col address">
          <h4>Registered Office Address:</h4>
          <p>
            Flipkart Internet Private Limited,<br />
            Buildings Alyssa, Begonia &<br />
            Clove Embassy Tech Village,<br />
            Outer Ring Road,<br />
            Devarabeesanahalli Village,<br />
            Bengaluru, 560103,<br />
            Karnataka, India<br />
            CIN : U51109KA2012PTC066107<br />
            Telephone: 044-45614700 / 044-67415800
          </p>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <span>🛒 Become a Seller</span>
          <span>⭐ Advertise</span>
          <span>🎁 Gift Cards</span>
          <span>❓ Help Center</span>
        </div>

        <div className="footer-bottom-center">
          © 2007-2025 Flipkart.com
        </div>

        <div className="footer-bottom-right">
          <span>VISA</span>
          <span>MASTER</span>
          <span>RUPAY</span>
          <span>NET</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
