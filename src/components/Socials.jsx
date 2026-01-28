import "./Socials.css";

function Socials({ redes }) {
  return (
    <section className="socials-section">
      <h3 className="socials-title">Seguinos</h3>

      <div className="socials-links">
        <a
          href={redes.Instagram}
          target="_blank"
          rel="noreferrer"
          className="social instagram"
        >
          Instagram
        </a>

        <a
          href={redes.Facebook}
          target="_blank"
          rel="noreferrer"
          className="social facebook"
        >
          Facebook
        </a>

        <a
          href={`https://wa.me/${redes.Whatsapp.replace(/\s/g, "")}`}
          target="_blank"
          rel="noreferrer"
          className="social whatsapp"
        >
          WhatsApp
        </a>
      </div>
    </section>
  );
}

export default Socials;
