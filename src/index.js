import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<p>Loading...</p>}>
      <LoadingDelay delay={1000}>
        <App />
      </LoadingDelay>
    </Suspense>
  </React.StrictMode>
);
