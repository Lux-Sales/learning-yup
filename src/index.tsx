import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalContext from './context';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <GlobalContext>
      <App />
    </GlobalContext>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
