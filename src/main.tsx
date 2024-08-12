import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

let app = null;

window.mount = () => {
  app = createRoot(document.getElementById('root')!);
  app.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

window.unmount = () => {
  app = null;
}

