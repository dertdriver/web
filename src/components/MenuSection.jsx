import ProductGrid from "./ProductGrid";

function MenuSection({ empanadas, pizzas }) {
  return (
    <section className="menu-section m-5">
      <div className="text-center">
        <p className="h3">OUR MENU</p>
        <p className="h4">
          Far far away, behind the word mountains...
        </p>
      </div>

      <div className="container">
        <ProductGrid
          title="Empanadas"
          items={empanadas}
          offer
        />

        <ProductGrid
          title="Pizzas"
          items={pizzas}
        />
      </div>
    </section>
  );
}

export default MenuSection;
