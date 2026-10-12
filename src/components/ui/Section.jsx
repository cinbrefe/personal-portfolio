import SectionHeader from './SectionHeader/SectionHeader.jsx';

// Shell for a home page section. One name sets the anchor id (/#name), the BEM block class and the
// heading id that aria-labelledby points to, so the three can't drift apart. children fill the section.
export default function Section({ name, label, heading, children }) {
	return (
		<section id={name} className={`${name} page-section`} aria-labelledby={`${name}-title`}>
			<div className={`container ${name}__inner`}>
				<SectionHeader name={name} label={label} heading={heading} />
				{children}
			</div>
		</section>
	);
}
