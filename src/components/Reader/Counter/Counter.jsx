import React from 'react';
import PropTypes from 'prop-types';
import { counter } from './Counter.module.css';

const Counter = ({ publications, value }) => {
  return (
    <>
      <p className={counter}>
        {value}/{publications.length}
      </p>
    </>
  );
};

Counter.propTypes = {
  publications: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  value: PropTypes.number.isRequired,
};

export default Counter;
