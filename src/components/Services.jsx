function Services({ items }) {
  return (
    <section className="services-section">
      <div className="container text-center">
        <div className="row">
          {items.map((s, i) => (
            <div key={i} className="col-md-3 mb-3">
              <div className="service-box">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
