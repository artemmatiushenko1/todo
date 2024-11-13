import './Input.scss';

type InputProps = Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'value' | 'placeholder' | 'onChange'
>;

const Input = ({ type, placeholder, value, onChange }: InputProps) => {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
