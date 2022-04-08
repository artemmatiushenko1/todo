import { useState } from 'react';
import boundToDoActions from 'redux/actions/todoActions';
import './Filter.scss';

const Filter = ({ options = [], value }) => {
  const [activeOption, setActiveOption] = useState(value);
  const onOptionSelectedHandler = (value) => {
    setActiveOption(value);
    boundToDoActions.setFilter(value);
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
