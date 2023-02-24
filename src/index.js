import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MenuContextProvider } from './context/MenuContext';
import { ThemeContextProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeContextProvider>
      <MenuContextProvider>
        <App />
      </MenuContextProvider>
    </ThemeContextProvider>
  </BrowserRouter>
);


