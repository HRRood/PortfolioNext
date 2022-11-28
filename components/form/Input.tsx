type Props = {
  id: string;
  label: string;
  name: string;
  type: string;
  value: any;
  inputRef?: React.RefObject<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export default function Input({ id, label, name, type, value, inputRef, onChange, required }: Props) {
  return (
    <div className="c-input">
      <div className="c-input__content">
        <input
          className="c-input__input"
          placeholder=" "
          value={value}
          id={id}
          name={name}
          type={type}
          ref={inputRef}
          onChange={onChange}
          required={required}
        />
        <label className="c-input__label" htmlFor={id}>
          {label}
        </label>
      </div>
    </div>
  );
}
