import useActions from 'hooks/use-actions';
import { useState } from 'react';
import { todoActions } from 'redux/actions/todoActions';
import './Filter.scss';

const Filter = ({ options = [], value }) => {
  const [activeOption, setActiveOption] = useState(value);
  const { setFilter } = useActions(todoActions);
  const onOptionSelectedHandler = (value) => {
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
