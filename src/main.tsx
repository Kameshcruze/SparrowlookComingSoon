import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import logoImg from './Layer 0.png';
import './index.css';

// Dynamically set premium favicon to match Layer 0.png
if (typeof window !== 'undefined') {
  const link = (document.querySelector("link[rel~='icon']") || document.createElement('link')) as HTMLLinkElement;
  link.type = 'image/png';
  link.rel = 'icon';
  link.href = logoImg;
  document.getElementsByTagName('head')[0].appendChild(link);

  const appleLink = (document.querySelector("link[rel~='apple-touch-icon']") || document.createElement('link')) as HTMLLinkElement;
  appleLink.rel = 'apple-touch-icon';
  appleLink.href = logoImg;
  document.getElementsByTagName('head')[0].appendChild(appleLink);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
