import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { updateMetaTags } from '@/lib/utils'

// Dynamically update meta tags on app load
updateMetaTags();

createRoot(document.getElementById("root")!).render(<App />);

