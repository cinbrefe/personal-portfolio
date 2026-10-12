import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { a11y } from './content/copy.js';
import Footer from './components/layout/Footer/Footer.jsx';
import Header from './components/layout/Header/Header.jsx';
import HomePage from './components/pages/HomePage.jsx';
import ProjectPage from './components/pages/ProjectPage/ProjectPage.jsx';
import ErrorBoundary from './components/ui/ErrorBoundary/ErrorBoundary.jsx';

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
			{/* tabIndex={-1} lets the skip link move focus here (a <main> can't take focus otherwise) */}
			<main id="main" tabIndex={-1}>
				{/* Only the page content is wrapped, so Header and Footer keep working after a crash.
				    key={pathname}: a new page gets a fresh boundary, so the error clears when you navigate away. */}
				<ErrorBoundary key={pathname}>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/projects/:slug" element={<ProjectPage />} />
					</Routes>
				</ErrorBoundary>
			</main>
			<Footer />
		</div>
	);
}
