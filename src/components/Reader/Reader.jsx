import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';

export default class Reader extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 1,
  };

  static propTypes = {
    publications: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    step: PropTypes.number,
    initialValue: PropTypes.number,
  };

  state = {
    index: 0,
    initialValue: this.props.initialValue,
  };

  handleIncrement = e => {
    e.preventDefault();
    this.setState(prevState => ({
      index: prevState.index + this.props.step,
      initialValue: prevState.initialValue + this.props.step,
    }));
  };

  handleDecrement = e => {
    e.preventDefault();
    this.setState(prevState => ({
      index: prevState.index - this.props.step,
      initialValue: prevState.initialValue - this.props.step,
    }));
  };

  render() {
    const { publications } = this.props;
    const { index } = this.state;
    const { initialValue } = this.state;
    return (
      <div className="reader">
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          index={index}
          publications={publications}
        />
        <Counter value={initialValue} publications={publications} />
        <Publication publication={publications[index]} />
      </div>
    );
  }
}
