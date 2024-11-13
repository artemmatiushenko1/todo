import useActions from '../../hooks/use-actions';
import { useState } from 'react';
import { todoActions } from '../../redux/actions/todoActions';
import './Filter.scss';

type FilterProps = {
  options: { value: string; label: string }[];
};

const Filter = ({ options = [] }: FilterProps) => {
  const [activeOption, setActiveOption] = useState('0');
  const { setFilter } = useActions(todoActions);

  const onOptionSelectedHandler = (value: string) => {
    setActiveOption(value);
    setFilter(value);
  };

  return (
    <div className="filter">
      {options.map(({ value, label }, i) => (
        <p
          key={i}
          className={`filter__option ${activeOption === value ? 'active' : ''}`}
          onClick={onOptionSelectedHandler.bind(null, value)}
        >
          {label}
        </p>
      ))}
    </div>
  );
};

export default Filter;
