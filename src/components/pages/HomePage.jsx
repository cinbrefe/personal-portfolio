import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Hero from '../sections/Hero/Hero.jsx';
import About from '../sections/About/About.jsx';
import Skills from '../sections/Skills/Skills.jsx';
import Projects from '../sections/Projects/Projects.jsx';
import Experience from '../sections/Experience/Experience.jsx';
import Education from '../sections/Education/Education.jsx';
import Contact from '../sections/Contact/Contact.jsx';

export default function HomePage() {
	const { hash } = useLocation();

	// The browser can't scroll to "/#contact" on its own, because React builds the sections after the page loads.
	// Once they exist, scroll to the section named in the URL (e.g. coming from a nav link on a project page).
	useEffect(() => {
		if (!hash) return;
		document.getElementById(hash.slice(1))?.scrollIntoView();
	}, [hash]);

	return (
		<>
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