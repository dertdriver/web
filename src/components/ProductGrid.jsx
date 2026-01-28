import ProductCard from "./ProductCard";

function ProductGrid({ title, items, offer }) {
  return (
    <>
      <label className="h2 bb3">{title}</label>
      <div className="row">
        {items.map((p, i) => (
          <ProductCard key={i} p={p} showOffer={offer} />
        ))}
      </div>
    </>
  );
}

export default ProductGrid;
