import Header from './components/layout/Header/Header';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Skills from './components/sections/Skills/Skills';
import { a11y } from './content/copy.js';

function App() {
	return (
		<div>
			<a className="skip-link" href="#main">{a11y.skipLink}</a>
			<Header />
			<main id="main" tabIndex={-1}>
				<Hero />
				<About />
				<Skills />
			</main>
		</div>
	);
}

export default App;