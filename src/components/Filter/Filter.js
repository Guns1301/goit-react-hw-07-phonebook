import PropTypes from "prop-types";
import style from "./Filter.module.css";

export default function Filter({ value, onChange }) {
  return (
    <>
      <input
        className={style.filter}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        placeholder="Enter name to find"
      />
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};
