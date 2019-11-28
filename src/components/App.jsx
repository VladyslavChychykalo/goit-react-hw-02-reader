import React from 'react';
import Reader from './Reader/Reader';
import '../common/css/reader.css';
import publications from '../info/publication.json';

const App = () => (
  <div>
    <Reader publications={publications} />
  </div>
);

export default App;
