import React from 'react';
import './Filter.scss';

const Filter = () => {
  return (
    <div className="filter">
      <p className="filter__option active">All</p>
      <p className="filter__option">Active</p>
      <p className="filter__option">Completed</p>
    </div>
  );
};

export default Filter;
