import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

class Controls extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    publications: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  handleIncrement = () => {
    const { onChange } = this.props;
    onChange(1);
  };

  handleDecrement = () => {
    const { onChange } = this.props;
    onChange(-1);
  };

  render() {
    const { publications } = this.props;
    const { index } = this.props;
    return (
      <section className={styles.controls}>
        <button
          type="button"
          className={styles.button}
          onClick={this.handleDecrement}
          disabled={index <= 0}
        >
          Назад
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={this.handleIncrement}
          disabled={index >= publications.length - 1}
        >
          Вперед
        </button>
      </section>
    );
  }
}

export default Controls;
