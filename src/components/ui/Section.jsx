import SectionHeader from './SectionHeader/SectionHeader.jsx';

// One name sets the anchor id, the BEM block and the heading id for aria-labelledby, so they can't drift apart
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
