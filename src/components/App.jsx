import React from 'react';
import Reader from './Reader/Reader';
import '../common/css/reader.css';
import publications from '../path/to/publication.json';

const App = () => (
  <>
    <Reader publications={publications} />
  </>
);

export default App;
