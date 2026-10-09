import { Routes, Route } from 'react-router';
import { a11y } from './content/copy.js';
import Header from './components/layout/Header/Header.jsx';
import HomePage from './components/pages/HomePage.jsx';
import ProjectPage from './components/pages/ProjectPage.jsx';
import Footer from './components/layout/Footer/Footer.jsx';

export default function App() {
	return (
		<div id="top">
			<a className="skip-link" href="#main">{a11y.skipLink}</a>
			<Header />
			<main id="main" tabIndex={-1}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/projects/:slug" element={<ProjectPage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}
