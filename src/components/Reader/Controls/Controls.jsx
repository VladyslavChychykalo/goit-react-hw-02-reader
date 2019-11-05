import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

export default function Controls({
  onIncrement,
  onDecrement,
  index,
  publications,
}) {
  return (
    <section className={styles.controls}>
      <button
        type="button"
        className={styles.button}
        onClick={onDecrement}
        disabled={index <= 0}
      >
        Назад
      </button>
      <button
        type="button"
        className={styles.button}
        onClick={onIncrement}
        disabled={index >= publications.length - 1}
      >
        Вперед
      </button>
    </section>
  );
}

Controls.propTypes = {
  publications: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  index: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};
