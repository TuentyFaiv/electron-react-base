import React from 'react';
import { render } from 'react-dom';
import App from './containers/App.jsx';

let rootE = document.createElement('div');

rootE.id = 'root';
document.body.appendChild(rootE);

render(<App />, document.getElementById('root'));
