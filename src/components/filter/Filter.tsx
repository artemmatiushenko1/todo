import './Filter.scss';
import { TodoStatus } from '../../constants';

type FilterProps = {
  value: keyof typeof TodoStatus;
  onChange: (value: keyof typeof TodoStatus) => void;
  options: { value: keyof typeof TodoStatus; label: string }[];
};

const Filter = ({ options = [], value, onChange }: FilterProps) => {
  const handleOptionSelected = (value: keyof typeof TodoStatus) => {
    onChange(value);
  };

  return (
    <div className="filter">
      {options.map((option, i) => (
        <p
          key={i}
          className={`filter__option ${option.value === value ? 'active' : ''}`}
          onClick={() => handleOptionSelected(option.value)}
        >
          {option.label}
        </p>
      ))}
    </div>
  );
};

export default Filter;
