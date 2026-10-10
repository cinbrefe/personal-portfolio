import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { a11y } from './content/copy.js';
import Header from './components/layout/Header/Header.jsx';
import HomePage from './components/pages/HomePage.jsx';
import ProjectPage from './components/pages/ProjectPage/ProjectPage.jsx';
import Footer from './components/layout/Footer/Footer.jsx';

export default function App() {
	const { pathname, hash } = useLocation();

	// <Link> keeps the scroll position, so start each new page at the top.
	// Links with a #hash (like /#projects) are skipped: HomePage scrolls to that section instead.
	useEffect(() => {
		if (hash) return;
		window.scrollTo(0, 0);
	}, [pathname, hash]);

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
