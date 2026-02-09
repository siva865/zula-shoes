import "../../src/index.css";

export default function Vision() {
  return (
    <section className="vision"id="vision">
      {/* Background Z */}
      <div className="vision-bg-letter">Z</div>

      {/* Content */}
      <div className="vision-content">
        <h2>Our Vision</h2>

        <p>
          At Zula, we envision a future where footwear actively contributes
          to health, mobility, and confidence — especially for those living
          with diabetes.
        </p>

        <p>
          Through <strong>Difee</strong>, our goal is to bridge the gap between
          medical science and everyday footwear by delivering solutions that
          are compassionate, precise, and deeply human.
        </p>

        <p className="vision-highlight">
          We don’t just design shoes. <br />
          We design support, safety, and a better way to move.
        </p>
      </div>
    </section>
  );
}
