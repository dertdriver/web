import ProductCard from "./ProductCard";

function CircleList({ productos }) {
  return (
    <section className="m-5">
      <div className="row text-light">
        {productos.map((p, i) => (
          <div key={i} className="col-md-6 row">
            <ProductCard producto={p} circle />
          </div>
        ))}
      </div>

      <div className="bb5 text-center m-5"></div>
    </section>
  );
}

export default CircleList;
