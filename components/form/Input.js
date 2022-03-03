import { useEffect, useState } from "react";

export default function Input({ id, label, name, type, inputRef, changeError, errorMessage }) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    const newValue = e.target.value;
    changeError();
    setValue(newValue);
  };
  return (
    <div className="c-input">
      <div className="c-input__content">
        <input
          className={`c-input__input ${errorMessage ? "error" : ""}`}
          value={value}
          onChange={onChange}
          placeholder=" "
          id={id}
          name={name}
          type={type}
          ref={inputRef}
        />
        <label className="c-input__label" htmlFor={id}>
          {label}
        </label>
      </div>
      {errorMessage ? <p className="c-input__error">{errorMessage}</p> : <p></p>}
    </div>
  );
}
