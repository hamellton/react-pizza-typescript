import React, { useEffect, useState } from "react";
import Categories from "../components/Categories/Categories";
import SortPopup from "../components/SortPopup/SortPopup";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import axios from "axios";
import { IPizzas } from "../interfaces/interfaces";

const Home: React.FC = () => {
  const [pizzas, setPizzas] = useState<IPizzas[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
      .then((res) => setPizzas(res.data.pizzas));
  }, []);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <SortPopup />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {pizzas.length === 0 ? (
            <h1>Идет загрузка...</h1>
          ) : (
            pizzas.map((el) => {
              return <PizzaBlock key={el.id} {...el} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
