import "./Hero.css";

function Hero({ bg, name }) {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-overlay text-center">
        <h1 className="hero-title">{name}</h1>
        <p className="hero-subtitle">
          Pizza por metro · Empanadas · Delivery
        </p>
      </div>
    </section>
  );
}

export default Hero;
