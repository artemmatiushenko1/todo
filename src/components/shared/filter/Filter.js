import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/actions';
import './Filter.scss';

const Filter = ({ options = [] }) => {
  const [activeOption, setActiveOption] = useState(0);
  const dispatch = useDispatch();
  const onOptionSelectedHandler = (index) => {
    setActiveOption(index);
    dispatch(setFilter(index));
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
