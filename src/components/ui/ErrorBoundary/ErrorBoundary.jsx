import { Component } from 'react';
import { errorPage } from '../../../content/copy.js';
import './ErrorBoundary.scss';

// Catches a crash in any component inside it and shows a friendly message instead of a blank page.
// Error boundaries must be class components: React has no hook for catching render errors.
// React already logs the error to the console, so there is no componentDidCatch here.
export default class ErrorBoundary extends Component {
	state = { hasError: false };

	// Called by React when a child throws while rendering; the returned object updates the state
	static getDerivedStateFromError() {
		return { hasError: true };
	}

	render() {
		if (!this.state.hasError) return this.props.children;

		// A plain <a> (not <Link>) reloads the whole site, so the app starts fresh
		return (
			<section className="error-boundary container container--narrow" aria-labelledby="error-boundary-title">
				<title>{errorPage.documentTitle}</title>
				<h1 id="error-boundary-title" className="error-boundary__title">{errorPage.heading}</h1>
				<p className="error-boundary__message">{errorPage.message}</p>
				<a className="error-boundary__link button button--primary" href="/">{errorPage.homeLink}</a>
			</section>
		);
	}
}
