import React, { useState } from 'react';
import boundToDoActions from 'redux/actions/todoActions';
import './Filter.scss';

const Filter = ({ options = [] }) => {
  const [activeOption, setActiveOption] = useState(0);
  const onOptionSelectedHandler = (index) => {
    setActiveOption(index);
    boundToDoActions.setFilter(index);
  };

  return (
    <div className="filter">
      {options.map((option, i) => (
        <p
          key={i}
          className={`filter__option ${activeOption === i ? 'active' : ''}`}
          onClick={onOptionSelectedHandler.bind(null, i)}
        >
          {option}
        </p>
      ))}
    </div>
  );
};

export default Filter;
