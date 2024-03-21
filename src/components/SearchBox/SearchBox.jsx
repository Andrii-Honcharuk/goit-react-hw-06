//SearchBox.jsx
import { useDispatch, useSelector } from "react-redux";
import { filterContactsByName } from "../../redux/store";
import style from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();

  const filterValue = useSelector((state) => state.filters.name);

  function handleChange(e) {
    dispatch(filterContactsByName(e.target.value));
  }
  // console.log("filterContacts state - ", filterContacts);

  console.log("filterContacts dispatch - ", dispatch);

  return (
    <div>
      <p className={style.label}>Find contacts by name or number</p>
      <input
        type="text"
        name="filter"
        placeholder="Search by name"
        value={filterValue}
        onChange={handleChange}
      />
    </div>
  );
}