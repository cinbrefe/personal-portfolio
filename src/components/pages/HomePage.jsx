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

	// The browser can't scroll to "/#contact" on its own, because React builds the sections after the page loads.
	// Once they exist, scroll to the section named in the URL (e.g. coming from a nav link on a project page),
	// and move keyboard and screen-reader focus to its heading ("<id>-title") so the next Tab continues from there.
	// Without a hash, coming from another page puts focus on the hero title, like ProjectPage does.
	// (key is 'default' only on the first page load, where focus should stay at the top.)
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
			{/* Tells search engines the official URL of this page (React 19 moves it into <head>) */}
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
