import clsx from "clsx";
import s from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        className={clsx(s.srchInpt)}
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
