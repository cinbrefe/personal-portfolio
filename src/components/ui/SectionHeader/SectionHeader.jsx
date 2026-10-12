import './SectionHeader.scss';

export default function SectionHeader({ name, label, heading }) {
	return (
		<div className={`section-header ${name}__header`}>
			<p className="section-header__label">{label}</p>
			{/* Each section uses aria-labelledby="<name>-title" to get its accessible name from this heading.
			    tabIndex={-1}: HomePage moves focus here when a link targets this section. */}
			<h2 id={`${name}-title`} tabIndex={-1}>{heading}</h2>
		</div>
	);
}
