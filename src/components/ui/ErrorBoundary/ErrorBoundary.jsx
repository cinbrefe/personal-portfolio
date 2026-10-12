import { Component, createRef } from 'react';
import { errorPage } from '../../../content/copy.js';
import './ErrorBoundary.scss';

// Catches a crash in any component inside it and shows a friendly message instead of a blank page.
// Error boundaries must be class components: React has no hook for catching render errors.
// React already logs the error to the console, so there is no componentDidCatch here.
export default class ErrorBoundary extends Component {
	state = { hasError: false };
	titleRef = createRef();

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	// Focus the message: a crash on the first render shows it on mount, a later crash on update
	componentDidMount() {
		if (this.state.hasError) this.titleRef.current?.focus();
	}

	componentDidUpdate(_prevProps, prevState) {
		if (!prevState.hasError && this.state.hasError) this.titleRef.current?.focus();
	}

	render() {
		if (!this.state.hasError) return this.props.children;

		// A plain <a> (not <Link>) reloads the whole site, so the app starts fresh
		return (
			<section className="error-boundary" aria-labelledby="error-boundary-title">
				<title>{errorPage.documentTitle}</title>
				<div className="container container--narrow error-boundary__inner">
					<h1 ref={this.titleRef} id="error-boundary-title" className="error-boundary__title" tabIndex={-1}>
						{errorPage.heading}
					</h1>
					<p className="error-boundary__message">{errorPage.message}</p>
					<a className="error-boundary__link button button--primary" href="/">{errorPage.homeLink}</a>
				</div>
			</section>
		);
	}
}
