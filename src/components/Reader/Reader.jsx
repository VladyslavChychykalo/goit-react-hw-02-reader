import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';

class Reader extends Component {
  static defaultProps = {
    startPageNumber: 1,
  };

  static propTypes = {
    publications: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    startPageNumber: PropTypes.number,
  };

  state = {
    index: 0,
    currentPageNummber: this.props.startPageNumber,
  };

  handleIncrement = e => {
    const { startPageNumber } = this.props;
    e.preventDefault();
    this.setState(prevState => ({
      index: prevState.index + startPageNumber,
      currentPageNummber: prevState.currentPageNummber + startPageNumber,
    }));
  };

  handleDecrement = e => {
    const { startPageNumber } = this.props;
    e.preventDefault();
    this.setState(prevState => ({
      index: prevState.index - startPageNumber,
      currentPageNummber: prevState.currentPageNummber - startPageNumber,
    }));
  };

  render() {
    const { publications } = this.props;
    const { index } = this.state;
    const { currentPageNummber } = this.state;
    return (
      <div className="reader">
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          index={index}
          publications={publications}
        />
        <Counter value={currentPageNummber} publications={publications} />
        <Publication publication={publications[index]} />
      </div>
    );
  }
}

export default Reader;
