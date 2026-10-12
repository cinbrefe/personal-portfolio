import './SectionHeader.scss';

export default function SectionHeader({ name, label, heading }) {
	return (
		<div className={`section-header ${name}__header`}>
			<p className="section-header__label">{label}</p>
			{/* Each section uses aria-labelledby="<name>-title" to get its accessible name from this heading */}
			<h2 id={`${name}-title`}>{heading}</h2>
		</div>
	);
}
