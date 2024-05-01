import { useEffect, useState } from "react";
import Pizza from "./Pizza";
import Loader from "./Loader";
import { useSelector } from "react-redux";

function PizzaList() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const category = useSelector((state) => state.filter.category);
  const value = useSelector((state) => state.search.value);
  const sortType = useSelector((state) => state.sort.sortType);
  const isSortAsc = useSelector((state) => state.sort.isSortAsc);

  const API_URL = new URL("https://66212e473bf790e070b21e9e.mockapi.io/items");

  API_URL.searchParams.append("sortBy", sortType.value);
  API_URL.searchParams.append("search", value);
  if (!isSortAsc) API_URL.searchParams.append("order", "desc");
  if (category > 0) {
    API_URL.searchParams.append("category", category);
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(API_URL, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else console.log("Упсс");
      })
      .then((data) => setPizzas(data))
      .catch((err) => console.log(err.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [category, sortType, isSortAsc, value]);

  return isLoading ? (
    [...new Array(6)].map((_, index) => <Loader key={index} />)
  ) : (
    <ul className="content__items">
      {pizzas.map((pizza) => (
        <Pizza key={pizza.id} {...pizza} />
      ))}
    </ul>
  );
}

export default PizzaList;
