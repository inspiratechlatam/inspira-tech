import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { captureUtm, initAnalytics } from './lib/analytics'

captureUtm();
initAnalytics(); // solo si hay token y la persona ya aceptó las cookies antes

createRoot(document.getElementById("root")!).render(<App />);
