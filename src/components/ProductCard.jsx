function ProductCard({ p, showOffer }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="row">
        <div className="col-5">
          <img src={p.src} className="w-100 img-thumbnail" />
        </div>
        <div className="col-7">
          <p>{p.nombre}</p>
          <p className="bb5">${p.precio}</p>
          {showOffer && p.precio > 100 && (
            <p className="text-danger">Oferta</p>
          )}
          <button className="btn btn-success btn-sm">comprar</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
