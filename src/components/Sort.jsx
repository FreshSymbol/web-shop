import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortType, setIsSortAsc } from "../redux/slices/sortSlice";

function Sort() {
  const sortCategorys = [
    { name: "популярности", value: "rating" },
    { name: "цене", value: "price" },
    { name: "алфавиту", value: "title" },
  ];
  const [isActive, setIsActive] = useState(false);
  const sortType = useSelector((state) => state.sort.sortType);
  const isSortAsc = useSelector((state) => state.sort.isSortAsc);
  const dispatch = useDispatch();

  function selectedSortCategory(index) {
    dispatch(setSortType(index));
    setIsActive(false);
  }

  function toggleSortCategory(toggle) {
    setIsActive(!toggle);
  }

  return (
    <div className="sort">
      <div className="sort__label">
        <svg
          className={isSortAsc ? "" : "sort__icon_desc"}
          onClick={() => dispatch(setIsSortAsc(isSortAsc))}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => toggleSortCategory(isActive)}>
          {sortType.name}
        </span>
      </div>
      {isActive && (
        <div className="sort__popup">
          <ul>
            {sortCategorys.map((category, index) => (
              <li
                className={sortType === index ? "active" : ""}
                onClick={() => selectedSortCategory(category)}
                key={index}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Sort;
