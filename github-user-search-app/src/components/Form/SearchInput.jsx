import Button from "../UI/Button";
import searchIcon from "../../assets/icon-search.svg";
import style from "./SearchInput.module.css";

function SearchInput({
  type,
  name,
  id,
  placeholder,
  onChange,
  noResult,
  noData,
}) {
  return (
    <div className={style.row}>
      <div className={`${style["form-control"]} ${noData && style["shake"]}`}>
        <img
          className={style["prefix-icon"]}
          src={searchIcon}
          alt="search_icon"
        />
        <input
          type={type}
          name={name}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
        />
        {noResult && <small className={style.error}>No result</small>}
        <Button className={style["suffix-btn"]}>Search</Button>
      </div>
    </div>
  );
}

export default SearchInput;
