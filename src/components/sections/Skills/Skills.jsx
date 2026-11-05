import { skills } from '@/content/copy.js';
import Section from '@/components/ui/Section.jsx';
import '@/components/sections/Skills/Skills.scss';

export default function Skills() {
	const { label, heading, groups } = skills;

	return (
		<Section name='skills' label={label} heading={heading}>
			<div className='skills__groups'>
				{groups.map((group) => (
					<div key={group.name} className='skills__group'>
						<h3 className='skills__group-name'>{group.name}</h3>
						<ul className='skills__tags'>
							{group.items.map((item) => (
								<li key={item} className='skills__tag'>
									{item}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</Section>
	);
}
