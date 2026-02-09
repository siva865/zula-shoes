import "../../src/index.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand"id="footer">
          <h3>ZULA <span>SHOES</span></h3>
          <p>
            Thoughtfully designed footwear for diabetic and sensitive feet.
            Where medical science meets everyday comfort.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Benefits</li>
            <li>Vision</li>
          </ul>
        </div>

        {/* Trust */}
        <div className="footer-trust">
          <h4>Built on Care</h4>
          <p>
            Developed with medical insight, biomechanical research,
            and compassionate treatment philosophy.
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Zula Footwear. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
