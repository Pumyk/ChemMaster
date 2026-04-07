import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Suppress harmless "Failed to fetch" unhandled rejections (often from Supabase background tasks)
window.addEventListener('unhandledrejection', (event) => {
  if (event.reason && event.reason.message === 'Failed to fetch') {
    console.debug('Suppressed unhandled Failed to fetch error (likely Supabase background task)');
    event.preventDefault();
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
