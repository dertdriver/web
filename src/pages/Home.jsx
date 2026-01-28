import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import MenuSection from "../components/MenuSection";
import About from "../components/About";
import Socials from "../components/Socials";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/config.json")
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  if (!data) return null;

  return (
    <>
      <Hero bg={data["img-url"].bg1} name={data.name} />
      <Services items={data.servicios} />
      <MenuSection
        empanadas={Object.values(data.empanadas)}
        pizzas={Object.values(data.pizzas)}
      />
      <About img={data["img-url"].about} name={data.name} />
      <Socials redes={data.redes} />
    </>
  );
}

export default Home;
