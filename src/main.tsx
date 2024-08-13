import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

let app = createRoot(document.getElementById('root')!);

window.mount = () => {
  app.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

window.unmount = () => {
  app.render(<div></div>);
}

