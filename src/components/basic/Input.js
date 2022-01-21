import './Input.scss';

const Input = ({ type, placeholder }) => {
  return <input className="input" type={type} placeholder={placeholder} />;
};

export default Input;
