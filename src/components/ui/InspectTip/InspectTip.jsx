import './InspectTip.scss';

// The fake inspector parts (selector, size, font) are decorative,
// so they're hidden from screen readers. Role and location stay readable.
export default function InspectTip({ tag, selectorClass, size, font, role, location }) {
	return (
		<div className="inspect-tip">
			<p className="inspect-tip__head" aria-hidden="true">
				<span>
					<span className="inspect-tip__tag">{tag}</span>
					<span className="inspect-tip__class">{selectorClass}</span>
				</span>
				<span className="inspect-tip__size">{size}</span>
			</p>
			<p className="inspect-tip__body">
				<span className="inspect-tip__item">{role}</span>
				<span className="inspect-tip__item">{location}</span>
				<span className="inspect-tip__item inspect-tip__font" aria-hidden="true">{font}</span>
			</p>
		</div>
	);
}
