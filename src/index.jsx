import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './components/Hello/Hello';

const name = "World";

ReactDOM.render(<Hello name={name} />, document.getElementById('app'));