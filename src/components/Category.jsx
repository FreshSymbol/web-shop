import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/filterSlice";

function Category({}) {
  const categories = ["Все", "Мясные", "Вегатерианские", "Микс", "Острые"];
  const categorySelector = useSelector((state) => state.filter.category);
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            className={categorySelector === index ? "active" : ""}
            onClick={() => dispatch(setCategory(index))}
            key={index}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Category;
