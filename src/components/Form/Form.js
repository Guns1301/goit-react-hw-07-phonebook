import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import style from "./Form.module.css";

export default function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChangeName = (event) => {
    setName(event.currentTarget.value);
  };

  const handleChangeNumber = (event) => {
    setNumber(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(name, number);
    resetName();
    resetNumber();
  };

  const resetName = () => {
    setName("");
  };

  const resetNumber = () => {
    setNumber("");
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label className={style.label}>
        Name
        <input
          className={style.input}
          type="text"
          name="name"
          value={name}
          placeholder="Enter your name"
          onChange={handleChangeName}
          required
        />
      </label>
      <label className={style.label}>
        Number
        <input
          className={style.input}
          type="tel"
          name="number"
          value={number}
          placeholder="Enter your number"
          onChange={handleChangeNumber}
          required
        />
      </label>
      <button type="submit" className={style.btn}>
        Add contact
      </button>
    </form>
  );
}

Form.propTypes = {
  getContact: PropTypes.func,
};
