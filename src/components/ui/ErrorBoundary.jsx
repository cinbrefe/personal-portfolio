import { Component } from 'react';
import { errorPage } from '../../content/copy.js';
import StatusMessage from './StatusMessage/StatusMessage.jsx';

// Catches a crash in any component inside it and shows a friendly message instead of a blank page.
// Error boundaries must be class components: React has no hook for catching render errors.
// React already logs the error to the console, so there is no componentDidCatch here.
export default class ErrorBoundary extends Component {
	state = { hasError: false };

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	render() {
		if (!this.state.hasError) return this.props.children;

		return <StatusMessage copy={errorPage} reload />;
	}
}
