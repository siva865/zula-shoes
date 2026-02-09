import "../../src/index.css";

export default function Benefits() {
  return (
    <section className="benefits" id="benefits">
      <h2 className="section-title">Why Difee for Diabetic Feet?</h2>

      <div className="benefits-grid">

        <div className="benefit-card">
          <div className="benefit-icon">🩺</div>
          <h3>Medical-First Design</h3>
          <p>
            Developed with clinical insights to reduce pressure points,
            prevent ulcers, and protect sensitive diabetic feet.
          </p>
        </div>

        <div className="benefit-card">
          <div className="benefit-icon">🦶</div>
          <h3>Advanced Comfort</h3>
          <p>
            Scientifically balanced cushioning and support ensure
            all-day comfort without compromising stability.
          </p>
        </div>

        <div className="benefit-card">
          <div className="benefit-icon">📐</div>
          <h3>Customized Fit</h3>
          <p>
            Foot-impression based insoles adapt to your foot shape,
            not the other way around.
          </p>
        </div>

        <div className="benefit-card">
          <div className="benefit-icon">🚶‍♂️</div>
          <h3>Safe Everyday Movement</h3>
          <p>
            Designed to improve balance, reduce strain, and support
            confident walking every day.
          </p>
        </div>

      </div>
    </section>
  );
}
