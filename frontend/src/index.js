import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ThoughtsProvider } from './context/ThoughtsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThoughtsProvider>
    <App />
  </ThoughtsProvider>
);
