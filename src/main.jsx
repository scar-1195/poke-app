import React from 'react';
import ReactDOM from 'react-dom/client';
import { PokeApp } from './PokeApp';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokeApp />
  </React.StrictMode>,
);
