import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import GlobalStyle from './globalStyle';
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
