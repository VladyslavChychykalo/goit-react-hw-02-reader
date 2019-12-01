import React, { Component } from 'react';
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';
import publications from '../../info/publication.json';

class Reader extends Component {
  state = {
    index: 0,
  };

  handleChangeValue = value => {
    const { index } = this.state;
    this.setState({
      index: index + value,
    });
  };

  render() {
    const { index } = this.state;
    return (
      <div className="reader">
        <Controls
          onChange={this.handleChangeValue}
          index={index}
          publications={publications}
        />
        <Counter index={index} publications={publications} />
        <Publication publication={publications[index]} />
      </div>
    );
  }
}

export default Reader;
