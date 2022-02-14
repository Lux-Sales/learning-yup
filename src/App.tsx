import React from 'react';
import Dashboard from './pages/Dashboard';
import GlobalContext from './context';
import GlobalStyle from './styles/global'

function App() {
  return (
    <GlobalContext>
      <Dashboard />
      <GlobalStyle />
    </GlobalContext>
  );
}

export default App;
