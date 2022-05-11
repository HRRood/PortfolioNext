type Props = {
  id: string;
  label: string;
  name: string;
  type: string;
};

export default function Input({ id, label, name, type }: Props) {
  return (
    <div className="c-input">
      <div className="c-input__content">
        <input className="c-input__input" placeholder=" " id={id} name={name} type={type} />
        <label className="c-input__label" htmlFor={id}>
          {label}
        </label>
      </div>
    </div>
  );
}
