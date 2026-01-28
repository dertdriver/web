function PizzaCard({ pizza }) {
  return (
    <div className="pizza-card">
      <img src={pizza.src} alt={pizza.nombre} />
      <h3>{pizza.nombre}</h3>
      <p>${pizza.precio}</p>
    </div>
  );
}

export default PizzaCard;
