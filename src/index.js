import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
   document.getElementById('root')
   );
