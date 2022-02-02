export default function Input({ id, label, name, type }) {
  return (
    <div className="c-input">
      <div className="c-input__content">
        <input className="c-input__input" placeholder=" " id={id} name={name} type={type} />
        <label className="c-input__label" for={id}>
          {label}
        </label>
      </div>
    </div>
  );
}
