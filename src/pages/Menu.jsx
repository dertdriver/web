import { useEffect, useState } from "react";
import MenuSection from "../components/MenuSection";
import HeroSection from "../components/HeroSection";
import CircleList from "../components/CircleList";


function Home() {
  const [list, setList] = useState({ empanadas: [], pizzas: [] });

  useEffect(() => {
    fetch("/config.json")
      .then(res => res.json())
      .then(data => setList(data));
  }, []);

  return (
    <>
      <MenuSection list={list} />
      <HeroSection />
      <CircleList productos={list.empanadas} />
    </>
  );
}

export default Home;
