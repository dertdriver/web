import "./About.css";
function About({ img, name }) {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={img} alt={name} />
        </div>

        <div className="about-text">
          <h2>
            Welcome to <span>{name}</span>
          </h2>
          <p>
            On her way she met a copy. The copy warned the Little Blind Text, that
            where it came from it would have been rewritten a thousand times and
            everything that was left from its origin would be the word “and”.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
