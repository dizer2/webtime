import React, { Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './i18n.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<p>Loading...</p>}>
      {/* <LoadingDelay delay={1000}> */}
        <App />
      {/* </LoadingDelay> */}
    </Suspense>
  </React.StrictMode>
);
