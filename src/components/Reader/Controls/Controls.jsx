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

  handleTakeValue = value => {
    this.props.onChange(value);
  };

  render() {
    const { publications } = this.props;
    const { index } = this.props;
    return (
      <section className={styles.controls}>
        <form action="">
          <button
            onClick={() => this.handleTakeValue('Withdraw')}
            type="button"
            className={styles.button}
            disabled={index <= 0}
          >
            Назад
          </button>
          <button
            onClick={() => this.handleTakeValue('Deposit')}
            type="button"
            className={styles.button}
            disabled={index >= publications.length - 1}
          >
            Вперед
          </button>
        </form>
      </section>
    );
  }
}

export default Controls;
