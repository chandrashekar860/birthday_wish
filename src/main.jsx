import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/dm-sans/latin-500.css';
import '@fontsource/dm-sans/latin-700.css';
import '@fontsource-variable/nunito';
import '@fontsource-variable/fraunces';
import '@fontsource-variable/fraunces/wght-italic.css';
import App from './App';
import './styles/globals.css';
import './styles/intro.css';
import './styles/house.css';
import './styles/activities.css';

createRoot(document.getElementById('root')).render(<StrictMode><App/></StrictMode>);
