




import React from 'react';
import { createRoot } from 'react-dom/client';  // Corrected import
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './redux/store.js';  // Corrected import
import App from './App';
import './index.css';

// Use createRoot from react-dom/client for React 18
const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <>
      <App />
    </>
  </>
);


