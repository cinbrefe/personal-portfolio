import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
// Before App on purpose: global styles come first in the CSS, so component classes can override them
import './styles/main.scss';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>,
);
