import { useEffect, useRef } from 'react';
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
	const isArriving = useRef(true);

	// Reset on unmount (and StrictMode's dev remount), so the next scroll counts as an arrival
	useEffect(() => () => {
		isArriving.current = true;
	}, []);

	// React renders the sections after load, so scroll to "/#section" here and focus its heading: a jump when
	// arriving from another page, smooth on the home page itself. Without a hash, focus the hero title after
	// navigating here (key is 'default' only on the first load).
	useEffect(() => {
		const behavior = isArriving.current ? 'instant' : 'auto';
		isArriving.current = false;

		if (!hash) {
			if (key !== 'default') document.getElementById('hero-title')?.focus();
			return;
		}

		const id = hash.slice(1);
		document.getElementById(id)?.scrollIntoView({ behavior });
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
