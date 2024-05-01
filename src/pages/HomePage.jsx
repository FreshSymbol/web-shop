import { useState } from "react";

import Category from "../components/Category";
import Sort from "../components/Sort";
import PizzaList from "../components/PizzaList";

function HomePage() {
  return (
    <>
      <div className="content__top">
        <Category />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <PizzaList />
    </>
  );
}

export default HomePage;
