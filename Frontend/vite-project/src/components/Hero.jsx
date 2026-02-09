import "../index.css";
import landscapeVideo from "../assets/landscape-video.mp4";
import portraitVideo from "../assets/hero.mp4";

export default function Home() {
  return (
    <section className="home"id="home">

      {/* LANDSCAPE – Desktop / Laptop / Tablet */}
      <video
        className="hero-video landscape-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={landscapeVideo} type="video/mp4" />
      </video>

      {/* PORTRAIT – Mobile */}
      <video
        className="hero-video portrait-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={portraitVideo} type="video/mp4" />
      </video>

      <div className="overlay"></div>

      <div className="home-content">
        <h1>
          Thoughtfully Designed Footwear <br />
          for Diabetic & Sensitive Feet
        </h1>
        <p>Comfort is not an afterthought — it’s the foundation.</p>
        <div className="accent-line"></div>
      </div>
    </section>
  );
}
