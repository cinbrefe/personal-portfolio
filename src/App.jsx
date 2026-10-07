import { a11y } from './content/copy.js';
import Header from './components/layout/Header/Header.jsx';
import Hero from './components/sections/Hero/Hero.jsx';
import About from './components/sections/About/About.jsx';
import Skills from './components/sections/Skills/Skills.jsx';
import Projects from './components/sections/Projects/Projects.jsx';
import Experience from './components/sections/Experience/Experience.jsx';
import Education from './components/sections/Education/Education.jsx';
import Contact from './components/sections/Contact/Contact.jsx';
import Footer from './components/layout/Footer/Footer.jsx';

export default function App() {
	return (
		<div id="top">
			<a className="skip-link" href="#main">{a11y.skipLink}</a>
			<Header />
			<main id="main" tabIndex={-1}>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Experience />
				<Education />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
