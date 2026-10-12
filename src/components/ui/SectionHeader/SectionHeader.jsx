import './SectionHeader.scss';

export default function SectionHeader({ name, label, heading }) {
	return (
		<div className={`section-header ${name}__header`}>
			<p className="section-header__label">{label}</p>
			{/* id: each section's aria-labelledby points here · tabIndex: HomePage focuses it for /#links */}
			<h2 id={`${name}-title`} tabIndex={-1}>{heading}</h2>
		</div>
	);
}
