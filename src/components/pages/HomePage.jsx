import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { site } from '../../content/copy.js';
import About from '../sections/About/About.jsx';
import Contact from '../sections/Contact/Contact.jsx';
import Education from '../sections/Education/Education.jsx';
import Experience from '../sections/Experience/Experience.jsx';
import Hero from '../sections/Hero/Hero.jsx';
import Projects from '../sections/Projects/Projects.jsx';
import Skills from '../sections/Skills/Skills.jsx';

export default function HomePage() {
	const { hash, key } = useLocation();

	// React renders the sections after load, so the browser can't scroll to "/#contact" on its own.
	// Scroll there and focus the section's heading; without a hash, focus the hero title after navigating
	// here (key is 'default' only on the first load, where focus stays at the top).
	useEffect(() => {
		if (!hash) {
			if (key !== 'default') document.getElementById('hero-title')?.focus();
			return;
		}

		const id = hash.slice(1);
		document.getElementById(id)?.scrollIntoView();
		document.getElementById(`${id}-title`)?.focus({ preventScroll: true });
	}, [hash, key]);

	return (
		<>
			<link rel="canonical" href={`${site.url}/`} />
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Experience />
			<Education />
			<Contact />
		</>
	);
}
