import "../../src/index.css";

export default function About() {
  return (
    <section className="about about-dark" id="about">
      <div className="about-container">

        {/* Big Z Brand */}
        <div className="zula-logo-wrap">
          <div className="zula-logo">
            <span>Z</span>
          </div>
        </div>

        {/* Content */}
        <div className="about-content">
          <h2>About Zula & Difee</h2>

          <p>
            Zula was born from a simple belief — footwear should support the body,
            not strain it. At the intersection of fashion, science, and human
            movement, we design footwear where comfort is a design essential.
          </p>

          <p>
            At the heart of Zula is <strong>Difee</strong>, a specialized division
            dedicated exclusively to diabetic and sensitive feet. Built on
            medical insight and biomechanical research, Difee addresses foot
            health with precision, care, and innovation.
          </p>

          <p>
            Using advanced foot-impression techniques and customized insole
            technology, Difee ensures footwear adapts to the foot — helping
            individuals walk safely, comfortably, and confidently every day.
          </p>

          <div className="about-highlight">
            Guided by clinical expertise and compassionate care, Zula isn’t just
            creating footwear — we’re redefining how it should feel.
          </div>
        </div>

      </div>
    </section>
  );
}
